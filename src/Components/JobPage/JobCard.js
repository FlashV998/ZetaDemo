import React from 'react'

export default function JobCard({
    jobDetail
}) {

    const findSalary = (salary) => {
        if (salary == null) {
            return 0
        }
        return salary
    }


    return (
        <div class="job-card">
            <div style={{ display: "flex", alignItems: "start", justifyItems: "start" }}>
                <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%"
                }}><img src={jobDetail?.logoUrl} alt="company_logo" srcset="" style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%"
                }} /></div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyItems: "start",marginLeft:"10px" }}>
                    <div class="job-card-company"
                        style={{
                            fontSize: "12px",
                        }}>{jobDetail?.companyName}</div>
                    <div class="job-card-title"
                        style={{
                            fontSize: "16px",
                            fontWeight: '500'
                        }}>{jobDetail?.jobRole}</div>

                    <div class="job-card-location"
                        style={{
                            fontSize: "10px",
                            fontWeight: '500'
                        }}>{jobDetail?.location}</div>
                </div>

            </div>
            <p class="job-card-salary">Estimated Salary: {jobDetail?.salaryCurrencyCode} {findSalary(jobDetail?.minJdSalary)}-{findSalary(jobDetail?.maxJdSalary)} LPA</p>
            <p class="job-card-description">
            {jobDetail?.jobDetailsFromCompany}
            </p>
            <div>
                <div style={{textDecoration:"uppercase"}}>Minimum Experience</div>
                <div>{jobDetail?.minExp ?? 0} years</div>
            </div>
            <div style={{
                marginTop:"10px"
            }}>
                <button className='btn-cyan'>Easy Apply</button>
                <button className='btn-blue' style={{
                    marginTop:"10px"
                }}>Unlock referral asks</button>
            </div>
        </div>
    )
}
