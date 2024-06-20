import React, { useCallback, useEffect, useRef, useState } from 'react'
import MultiAutoComplete from '../Dropdowns/MultiAutoComplete'
import FilterSection from '../Filters/FilterSection'
import JobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getJobDetailsRequest, updateFilteredList } from '../../store/actions/jobDetails'
import { entries, get } from "lodash";
import Skeleton from "@mui/material/Skeleton";


export default function JobComponent() {
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(1);
  const bottomRef = useRef(null);
  const [loading, setLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [filtedJobDetailsSpinner, setFiltedJobDetailsSpinner] = useState(true)
  const { jobList, jobDetailsSpinner, currentFilterValues, filteredList } = useSelector((state) => {
    return {
      jobList: get(state, ["MyJobDetails", "jobDetails"]),
      jobDetailsSpinner: get(state, ["MyJobDetails", "jobDetailsSpinner"]),
      currentFilterValues: get(state, ["MyJobDetails", "currentFilterValues"]),
      filteredList: get(state, ["MyJobDetails", "filteredList"]),

    }
  })

const pageCount = 9 // amount of cards to be fetched in 1 go

  useEffect(() => {
    dispatch(getJobDetailsRequest())
  }, [])


  useEffect(() => {
    if (currentFilterValues) {
      const {
        selectedRoles,
        employesCount,
        experience,
        workPlace,
        basePay,
        searchInput
      } = currentFilterValues;
      if (jobList?.length > 0) {
        let filteredList = jobList?.filter((job) => {
          const roleMatch = selectedRoles?.length > 0 ? selectedRoles?.some(selectedRole => selectedRole.value === job.jobRole) : 1;
          const employeeCountMatch = employesCount?.length > 0 ? employesCount?.some(employesCountItem => employesCountItem.value === job.employesCount) : 1; // this wont work since no employeecount is provided in JSON data
          const experienceMatch = experience ? experience.value === 0 || (job.minExp <= parseInt(experience.value) && job.maxExp >= parseInt(experience.value)) : 1
          const workPlaceMatch = workPlace?.length > 0 ? workPlace.some(workPlaceItem => workPlaceItem.value === job.workPlace):1; // this wont work since no employeecount is provided in JSON data
          const basePayMatch = basePay.length > 0  ? basePay.some(basePayItem => (job.minJdSalary >= parseInt(basePayItem.value))) : 1
          const searchInputMatch =searchInput.length >0 ? searchInput === '' || job?.companyName?.toLowerCase().includes(searchInput.toLowerCase()):1;
          
          return roleMatch &&  experienceMatch &&  searchInputMatch && basePayMatch;   
          // employeeCountMatch && workPlaceMatch 
        })
        setFiltedJobDetailsSpinner(false)
        dispatch(updateFilteredList([...filteredList]))
        setLoading(false)
      }
    }
  }, [jobList, currentFilterValues])



  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && pageNo * pageCount <= filteredList?.length) {
          setLoading(true)
          setTimeout(() => {
            setPageNo((prevValue) => prevValue + 1);
            setLoading(false)  
          }, 2000);
      }
    });
    observer.observe(bottomRef.current);
  }, [loading, filteredList]);



  return (
    <div className='relative'>
      <FilterSection setFiltedJobDetailsSpinner={setFiltedJobDetailsSpinner} />

      {filtedJobDetailsSpinner ? <div className='job-container' >
        {Array(3)
          ?.fill()
          ?.map((item, ind) => {
            return (
              <div style={{
                margin: "20px 12px"
              }}>
                <Skeleton
                  key={ind}
                  variant="rectangular"
                  width="27vw"
                  height="420px"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
            );
          })}
      </div> :
        (filteredList && filteredList?.length > 0) ?
          <div className='job-container'>
            {filteredList?.slice(0, pageNo * pageCount)?.map((jobDetail, index) => {
              if (index == (pageNo * pageCount - 1)) {
                return <JobCard key={`unique_${index}`} jobDetail={jobDetail} />
              }
              else {
                return <JobCard key={`unique_${index}`} jobDetail={jobDetail} />
              }
            })}
          </div>
          :
          <div></div>}
          {(loading  && ((pageNo * pageCount) <= filteredList?.length)) &&
          <div style={{
            marginBottom:"50%",
            width:"100%"
          }}>
            <div style={{
              border:"1px solid #B1A5DF",
              background:"#B1A5DF",
              borderRadius:"10px",
              padding:"10px 20px",
              width:"fit-content",
              margin:"auto"
            }}>
            LOADING .... 
            </div>
          </div>
          } 
      <div className='' ref={bottomRef} />
    </div>
  )
}
