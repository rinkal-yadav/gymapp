import React, { useEffect, useState } from 'react'

const Items = ({ data, gymSearchByName, gymSearch }) => {
    const gymimage = "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg"
    //  console.log(gymSearchByName.name.toLowerCase())
    let [newdata, setNewdata] = useState([])
    useEffect(() => {
        setNewdata(JSON.parse(data).data)

    }, [data,newdata,setNewdata])

    const name = gymSearchByName.name
    const byCity = gymSearch.city
    // const loc = gymSearch.loc.toLowerCase()
    // const minRange = gymSearch.minRange.toLowerCase()
    // const maxRange = gymSearch.maxRange.toLowerCase()
    return (
        <>
            {(name.length ===0 && byCity.length === 0) ?

                <>
                    {newdata.map((value) => {
                        return (
                            <div key={value.user_id} className='contentBox'>
                                <div className='imgBox'>
                                    <img src={value.cover_image === null ? gymimage : value.cover_image} alt={'gym'} />
                                </div>
                                <div className='contentDetails'>
                                    <div className='loctionDetails' >
                                        <h3>{value.gym_name}</h3>
                                        <div>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <p>{value.address1} {value.address2}, {value.city},{value.state}</p>
                                        <div>{value.duration_text} away | {value.distance_text} </div>
                                    </div>
                                    <div className='btnContainer'>
                                        <span>{value.plan_price !== null ? <>₹ {value.plan_price} {value.plan_name}</> : ""}</span>
                                       <a target='blank' href='https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym'> <button className='bookNowBtn'>Book Now</button> </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    )}
                </>
                : <>
                    <>
                        {gymSearchByName.name.length >1 ?<>
                            {newdata.filter((value) => value.gym_name.toLowerCase().includes(name.toLowerCase())).map((value) =>
                                {return(
                                    <div key={value.user_id} className='contentBox'>
                                    <div className='imgBox'>
                                        <img src={value.cover_image === null ? gymimage : value.cover_image} alt={'gym'} />
                                    </div>

                                    <div className='contentDetails'>
                                        <div className='loctionDetails' >
                                            <h3>{value.gym_name}</h3>
                                            <div>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                            <p>{value.address1} {value.address2}, {value.city},{value.state}</p>
                                            <div>{value.duration_text} away | {value.distance_text} </div>
                                        </div>

                                        <div className='btnContainer'>
                                            <span>{value.plan_price !== null ? <>₹ {value.plan_price} {value.plan_name}</> : ""}</span>
                                            <a target='blank' href='https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym'> <button className='bookNowBtn'>Book Now</button> </a>
                                        </div>

                                    </div>

                                </div>
                                )}
                            )}
                        </> 
                      :
                    
                        <>
                            {newdata.filter((value) => value.city.toLowerCase().includes(byCity.toLowerCase())).map((value) =>
                                <div key={value.user_id} className='contentBox'>
                                    <div className='imgBox'>
                                        <img src={value.cover_image === null ? gymimage : value.cover_image} alt={'gym'} />
                                    </div>
                                    <div className='contentDetails'>
                                        <div className='loctionDetails' >
                                            <h3>{value.gym_name}</h3>
                                            <div>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                            <p>{value.address1} {value.address2}, {value.city},{value.state}</p>
                                            <div>{value.duration_text} away | {value.distance_text} </div>
                                        </div>

                                        <div className='btnContainer'>
                                            <span>{value.plan_price !== null ? <>₹ {value.plan_price} {value.plan_name}</> : ""}</span>
                                            <a target='blank' href='https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym'> <button className='bookNowBtn'>Book Now</button> </a>
                                        </div>

                                    </div>

                                </div>
                            )}
                        </>
                    }
                    </>
                </>


            }
        </>
    )
}

export default Items