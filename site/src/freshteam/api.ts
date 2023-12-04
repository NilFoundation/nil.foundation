import { client } from "./client";
import { Job, JobStatus } from "./types";

interface Api {
    getJobPostings(s: JobStatus): Promise<Job[]>;
}

export const api = {
    getJobPostings: (status?: JobStatus) => {
        let url = "job_postings"

        if (status) {
            url += `?status=${status}`
        }

        return client.get<JobStatus, Job[]>(url).then((res) => res)
    },
} satisfies Api
