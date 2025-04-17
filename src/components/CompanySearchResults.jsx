import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { fetchJobActions } from '../redux/actions'
import { useDispatch, useSelector  } from 'react-redux'

const CompanySearchResults = () => {

  const params = useParams()
const dispatch = useDispatch()
const jobs = useSelector((state) => state.jobs.jobList); 

  useEffect(() => {
    //getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatchEvent(fetchJobActions(params.companyName))
  }, [params.companyName])



  return (
    <Container>
      <Row>
        <Col>
          {jobs.length > 0 ? (
            jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
          ) : (
            <p>Nessun risultato trovato.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults
