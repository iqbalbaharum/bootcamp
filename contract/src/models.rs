use crate::*;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{serde, AccountId};

pub type JobId = u64;

#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct JobDetail {
    pub reference: String,
    pub reference_hash: Option<Base64VecU8>,
    // pub referrals: HashMap<AccountId, AccountId>,
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct Job {
    pub owner_id: AccountId,
}

//The Json token is what will be returned from view calls.
#[derive(Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct JsonJob {
    pub job_id: JobId,
    pub owner_id: AccountId,
    pub detail: JobDetail,
}
