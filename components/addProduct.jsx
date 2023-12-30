import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { context } from './Context';
import { useContext } from 'react';
import { useRef } from 'react';
import './addProduct.css'

function AddProduct() {
    const data=useContext(context);
    const {product,setproduct}=data;
    const myRef=useRef(null);
    const addDetails=()=>{
        const id=parseInt(myRef.current.id.value);
        const model=myRef.current.model.value;
        const title=myRef.current.title.value;
        const price=parseInt(myRef.current.price.value);
        const image=myRef.current.image.value;
        setproduct([...product,{id,model,title,price,image}])
        console.log(product); 
    }


  return (
    <Form ref={myRef} onSubmit={(item)=>item.preventDefault()} className='boss' >
      <Form.Group className="mb-3 " controlId="formBasicEmail" >
        <Form.Label className='label-txt '>id</Form.Label>
        <Form.Control name='id' type='number' className='petti' placeholder="number*" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-txt'>model</Form.Label>
        <Form.Control name='model' className='petti' placeholder="model*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-txt'>title</Form.Label>
        <Form.Control name='title' className='petti' placeholder="title*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-txt'>price</Form.Label>
        <Form.Control name='price' className='petti' placeholder="price*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-txt'>image</Form.Label>
        <Form.Control name='image'  className='petti' placeholder="URL*" />
      </Form.Group>

      <Button onClick={addDetails} variant="primary" type="submit" className='btn-add mt-5'>
        ADD PRODUCT
      </Button>
    </Form>
  );
}

export default AddProduct;