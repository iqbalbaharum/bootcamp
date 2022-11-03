#[warn(unused_imports)]
use crate::*;
use near_sdk::{Balance, CryptoHash, Promise};
use std::mem::size_of;

pub(crate) fn hash_account_id(account_id: &AccountId) -> CryptoHash {
    let mut hash = CryptoHash::default();
    hash.copy_from_slice(&env::sha256(account_id.as_bytes()));
    hash
}

pub(crate) fn assert_one_yocto() {
    assert_eq!(
        env::attached_deposit(),
        1,
        "Requires attached deposit of exactly 1 yoctoNEAR"
    )
}

pub(crate) fn refund_deposit(storage_used: u64) {
    let required_cost = env::storage_byte_cost() * Balance::from(storage_used);
    let attached_deposit = env::attached_deposit();

    assert!(
        required_cost <= attached_deposit,
        "Must attach {} yoctoNEAR to cover storage fee",
        required_cost
    );

    let refund = attached_deposit - required_cost;

    if refund > 1 {
        Promise::new(env::predecessor_account_id()).transfer(refund);
    }
}

pub(crate) fn bytes_for_approved_account_id(account_id: &AccountId) -> u64 {
    account_id.as_str().len() as u64 + 4 + size_of::<u64>() as u64
}

impl Contract {
    pub(crate) fn internal_add_job_to_owner(&mut self, owner_id: &AccountId, job_id: &JobId) {
        let mut jobs_set = self.jobs_per_owner.get(owner_id).unwrap_or_else(|| {
            UnorderedSet::new(
                StorageKey::JobPerOwnerInner {
                    account_id_hash: hash_account_id(&owner_id),
                }
                .try_to_vec()
                .unwrap(),
            )
        });

        jobs_set.insert(job_id);

        self.jobs_per_owner.insert(owner_id, &jobs_set);
    }
}
