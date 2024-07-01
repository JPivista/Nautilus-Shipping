
import status from '../config.json'
import React,{useEffect, useState} from 'react'
import Head from 'next/head'

const JobDetail = () => {

const bol = !`${status.STATUS}`


const[show] = useState(bol);

// useEffect(()=>{

// if


// })



return (
  <>
{show?<meta name="robots" content="index,follow"></meta>:<meta name="robots" content="noindex,nofollow"></meta>}
</>
)

}

export default JobDetail;