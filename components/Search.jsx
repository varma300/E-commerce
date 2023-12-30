import React, { useContext } from 'react'
import { context } from './Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Search() {
    const data =useContext(context)
    const {search,product}=data
    console.log(product);

   


    return ( 

    
      <div style={{ display: 'flex', width: '100%',  }}> 
        <div className='d-flex flex-column container mt-5' style={{ width: '90%',   }}>
          <div className='row gap-2 justify-content-center'>
            {product
              .filter((val) => {
                if (search === '') {
                  return val;
                } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                  return val;
                }
                return false;
              })
              .map((item) => (
                <div className='col-lg-3 col-md-6'>
                  <Card
                    className='shadow p-3 mb-5 bg-body-tertiary rounded border border-0 rounded-4'
                    style={{
                      width: '18rem',
                      boxShadow: '7px 5px 8px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    <Card.Img variant='top' className='image' src={item.image} />
                    <Card.Body style={{ textAlign: 'center' }}>
                      <Card.Title style={{ fontFamily: 'poppins, sans-serif' }}>
                        {item.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontFamily: 'sans-serif',
                          fontWeight: '1000',
                          fontSize: '30px',
                        }}
                      >
                        ₹{item.price}
                      </Card.Text>
                     
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
    
}

export default Search