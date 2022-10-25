use crate::*;
use near_sdk::json_types::U128;

pub trait JobCore {
    fn total_jobs_count(&self) -> U128;
    fn get_job_by_id(&self, job_id: JobId) -> Option<JsonJob>;
    fn get_all_jobs(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<JsonJob>;
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
}
