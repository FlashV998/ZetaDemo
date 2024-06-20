import React, { useEffect, useState } from 'react'
import MultiAutoComplete from '../Dropdowns/MultiAutoComplete'
import { basePayOptions, employeeCountOptions, experienceOptions, rolesOptions, workPlaceOptions } from './sampleFiltersData'
import SearchBar from '../Dropdowns/SearchBar'
import { useDispatch } from 'react-redux'
import { updateFilterSettings } from '../../store/actions/jobDetails'

export default function FilterSection({
  setFiltedJobDetailsSpinner

}) {

  const [selectedRoles, setSelectedRoles] = useState([])
  const [employesCount, setEmployesCount] = useState([])
  const [experience, setExperience] = useState(null)
  const [workPlace, setWorkPlace] = useState([])
  const [basePay, setBasePay] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    let currentValues = {
      selectedRoles,
      employesCount,
      experience,
      workPlace,
      basePay,
      searchInput,
    }
    // if (selectedRoles?.length > 0 || employesCount?.length > 0 || experience || workPlace.length > 0 || basePay.length > 0 || searchInput)
    dispatch(updateFilterSettings({ ...currentValues }))
    setFiltedJobDetailsSpinner(true)
  }, [selectedRoles,
    employesCount,
    experience,
    workPlace,
    basePay,
    searchInput])

  return (
    <div className='filters-list'>
      <div className='filters-list-child'>
        <MultiAutoComplete
          value={selectedRoles}
          setValue={setSelectedRoles}
          options={rolesOptions}
          placeholder={"Roles"}
          heading={"Roles"}
          groupBy={true}
          multiple={true}
        />
      </div>
      <div className='filters-list-child' >
        <MultiAutoComplete
          value={employesCount}
          setValue={setEmployesCount}
          options={employeeCountOptions}
          placeholder={"Number of Employees"}
          heading={"Number of Employees"}
          multiple={true}
        />
      </div>
      <div className='filters-list-child' >
        <MultiAutoComplete
          value={experience}
          setValue={setExperience}
          options={experienceOptions}
          placeholder={"Experience"}
          heading={"Experience"}
          multiple={false}
        />
      </div>
      <div className='filters-list-child'>
        <MultiAutoComplete
          value={workPlace}
          setValue={setWorkPlace}
          options={workPlaceOptions}
          placeholder={"Work Type"}
          heading={"Work Type"}
          multiple={true}
        />
      </div>
      <div className='filters-list-child'>
        <MultiAutoComplete
          value={basePay}
          setValue={setBasePay}
          options={basePayOptions}
          placeholder={"Min Base Pay"}
          heading={"Min Base Pay"}
          multiple={true}
        />
      </div>
      <div className='filters-list-child'>
        <SearchBar
          value={searchInput}
          setValue={setSearchInput}
          placeholder={"Search Company Name"}
          heading={"Search Company Name"}
        />
      </div>
    </div>
  )
}
