use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LookupMap, UnorderedMap, UnorderedSet};
use near_sdk::json_types::Base64VecU8;
use near_sdk::{env, near_bindgen, AccountId, CryptoHash};

mod internal;
mod job_core;
mod models;

pub use crate::internal::*;
pub use crate::job_core::*;
pub use crate::models::*;

#[derive(BorshSerialize)]
pub enum StorageKey {
    JobById,
    JobDetailById,
    JobsPerOwner,
    JobMetadataById,
    JobPerOwnerInner { account_id_hash: CryptoHash },
}

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    pub job_by_id: LookupMap<JobId, Job>,
    pub jobs_per_owner: LookupMap<AccountId, UnorderedSet<JobId>>,
    pub job_detail_by_id: UnorderedMap<JobId, JobDetail>,
    pub next_job_id: u64,
}

// Define the default, which automatically initializes the contract
impl Default for Contract {
    fn default() -> Self {
        let this = Self {
            job_by_id: LookupMap::new(StorageKey::JobById.try_to_vec().unwrap()),
            jobs_per_owner: LookupMap::new(StorageKey::JobsPerOwner.try_to_vec().unwrap()),
            job_detail_by_id: UnorderedMap::new(StorageKey::JobMetadataById.try_to_vec().unwrap()),
            next_job_id: 0,
        };

        this
    }
}

// Implement the contract structure
#[near_bindgen]
impl Contract {
    #[payable]
    pub fn new_post(&mut self, detail: JobDetail) {
        let initial_storage_cost = env::storage_usage();

        let job = Job {
            owner_id: env::predecessor_account_id(),
        };

        let job_id = self.next_job_id;

        assert!(
            self.job_by_id.insert(&job_id, &job).is_none(),
            "Job ID already exists"
        );

        self.job_detail_by_id.insert(&job_id, &detail);
        self.internal_add_job_to_owner(&env::predecessor_account_id(), &job_id);

        self.next_job_id += 1;

        let required_storage_in_bytes = env::storage_usage() - initial_storage_cost;

        refund_deposit(required_storage_in_bytes);
    }
}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
#[cfg(test)]
mod tests {
    // use super::*;

    // #[test]
    // fn get_default_greeting() {
    //     let contract = Contract::default();
    //     // this test did not call set_greeting so should return the default "Hello" greeting
    //     assert_eq!(contract.get_greeting(), "Hello".to_string());
    // }

    // #[test]
    // fn set_then_get_greeting() {
    //     let mut contract = Contract::default();
    //     contract.set_greeting("howdy".to_string());
    //     assert_eq!(contract.get_greeting(), "howdy".to_string());
    // }
}
