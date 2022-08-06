import React, { useState } from 'react'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClearIcon from '@mui/icons-material/Clear';
import Items from './Items';
import gymDetail from '../nearestgym'
import banner from '../../image/banner2.jpg'
import clear from '../../image/clear.png'

const Gyms = () => {
    const [gymSearch, setGymSearch] = useState({ loc: "", minRange: "", maxRange: "", city: "" })
    const [gymSearchByName, setGymSearchByName] = useState({ name: "" })
    // const [input,setInput]=useState({name:''})
    const onHandle = (e) => {
        const name = e.target.name
        const value = e.target.value
        setGymSearchByName({ ...gymSearchByName, [name]: value })
        // setInput({ ...gymSearchByName, [name]: value })
    }
    const onHandle2 = (e) => {
        const name = e.target.name
        const value = e.target.value
        setGymSearch({ ...gymSearch, [name]: value })
    }

    const clearSearch = () => {
        setGymSearchByName({ name: '' })

    }
    const resetAll = (event) => {
        setGymSearchByName({ name: '' })
        setGymSearch({ loc: "", minRange: "", maxRange: "", city: "" })
        event.preventDefault()

    }
    console.log(gymSearchByName)
    console.log(gymSearch, "####")
    return (
        <><div className='gymBanner'>
            <img src={banner} alt="" />
        </div>
            <div className='searchInput'>
                <SearchIcon />
                <InputBase
                    placeholder='Search gym name here ...'
                    name="name"
                    value={gymSearchByName.name}
                    onChange={onHandle}
                />
                <LocationOnIcon />
                <button onClick={clearSearch} >Clear</button>
            </div>

            <div className='itemContainer'>

                <div className='inputFilter'>
                    {
                        gymSearchByName !== '' || gymSearch !== '' ? <button onClick={resetAll}>Reset</button> : null

                    }
                    <form  >
                        <h2>Filter </h2>
                        <h3>Location</h3>
                        <div className='smallSearchInput'>
                            <SearchIcon />
                            <InputBase placeholder='Enter location' name="loc" value={gymSearch.loc} onChange={onHandle2} />
                        </div>
                        <h3>Price</h3>
                        <div className='minAndMaxBox'>

                            <div className='mininnerBox'>
                                <InputBase placeholder='Min' name="minRange" value={gymSearch.minRange} onChange={onHandle2} />
                            </div>
                            <div className='mininnerBox'>
                                <InputBase placeholder='Max' name="maxRange" value={gymSearch.maxRange} onChange={onHandle2} />
                            </div>

                        </div>
                        <h3>Cities</h3>
                        <select name='city' onChange={onHandle2}>
                            {/* <option value="select" selected>- - - - - Select - - - - -</option> */}
                            <option value="new delhi">New Delhi</option>
                            <option value="gazibad">Gaziabad</option>
                            <option value="noida">Noida</option>
                            <option value="delhi">Delhi</option>
                        </select>
                    </form>
                </div>
                <div className='items'>
                    <Items data={JSON.stringify(gymDetail)} gymSearch={gymSearch} gymSearchByName={gymSearchByName} />
                </div>


            </div>
        </>
    )
}

export default Gyms