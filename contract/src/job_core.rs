use crate::*;
use near_sdk::json_types::U128;

pub trait JobCore {
    fn total_jobs_count(&self) -> U128;
    fn get_job_by_id(&self, job_id: JobId) -> Option<JsonJob>;
    fn get_all_jobs(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<JsonJob>;
    fn new_job(&mut self, detail: JobDetail);
    // fn refer_a_job(&mut self, job_id: JobId, referee_id: &AccountId, referal_id: &AccountId);
}

#[near_bindgen]
impl JobCore for Contract {
    fn total_jobs_count(&self) -> U128 {
        U128(self.job_detail_by_id.len() as u128)
    }

    fn get_job_by_id(&self, job_id: JobId) -> Option<JsonJob> {
        if let Some(job) = self.job_by_id.get(&job_id) {
            let detail = self.job_detail_by_id.get(&job_id).unwrap();
            Some(JsonJob {
                job_id,
                owner_id: job.owner_id,
                detail,
            })
        } else {
            None
        }
    }

    fn get_all_jobs(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<JsonJob> {
        let start = u128::from(from_index.unwrap_or(U128(0)));

        self.job_detail_by_id
            .keys()
            .skip(start as usize)
            .take(limit.unwrap_or(50) as usize)
            .map(|job_id| self.get_job_by_id(job_id.clone()).unwrap())
            .collect()
    }

    #[payable]
    fn new_job(&mut self, detail: JobDetail) {
        let initial_storage_cost = env::storage_usage();

        let job = Job {
            owner_id: env::predecessor_account_id(),
        };

        let job_id = self.next_job_id;

        assert!(
            self.job_by_id.insert(&job_id, &job).is_none(),
            "Job ID already exists"
        );

        self.job_detail_by_id.insert(
            &job_id,
            &JobDetail {
                company: detail.company,
                email: detail.email,
                location: detail.location,
                otherskills: detail.otherskills,
                skills: detail.skills,
                reference: None,
                reference_hash: None,
                description: detail.description,
                logo: detail.logo,
                position: detail.position,
                expired: detail.expired,
                salary_max: detail.salary_max,
                salary_min: detail.salary_min,
                salary_currency: detail.salary_currency,
                bounty_amount: detail.bounty_amount,
                bounty_currency: detail.bounty_currency,
                status: Some(0),
            },
        );

        self.internal_add_job_to_owner(&env::predecessor_account_id(), &job_id);

        self.next_job_id += 1;

        let required_storage_in_bytes = env::storage_usage() - initial_storage_cost;

        refund_deposit(required_storage_in_bytes);
    }
    // TODO
    // Add another cross contract call - which send back the notification to
    // fn refer_a_job(&mut self, job_id: JobId, referee_id: &AccountId, referal_id: &AccountId) {
    //     let mut job = self.job_by_id.get(&job_id).expect("No Job");

    //     assert_ne!(referal_id, referee_id, "Can't refer yourselves");

    //     let is_new_referal = job
    //         .referrals
    //         .insert(referee_id.clone(), referal_id.clone())
    //         .is_none();

    //     let storage_used = if is_new_referal {
    //         bytes_for_approved_account_id(&account_id)
    //     } else {
    //         0
    //     };

    //     self.job_by_id.insert(&job_id, &job);

    //     refund_deposit(storage_used);
    // }
}
