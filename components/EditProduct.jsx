import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { context } from './Context';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './editproduct.css'


function EditProduct() {
    const navigate = useNavigate();
    const data=useContext(context);
    const {edit,product,setproduct}=data;
    const myRef=useRef(null);
    const update=()=>{
      const [editData] = edit;
      const cloneProduct = [...product]
      let productIndex;
      cloneProduct.forEach((item,index)=>{if(item.id===parseInt( editData.id)){
        productIndex=index;
    }})
        cloneProduct[productIndex].id=parseInt(myRef.current.id.value);
        cloneProduct[productIndex].model=myRef.current.model.value;
        cloneProduct[productIndex].title=myRef.current.title.value;
        cloneProduct[productIndex].price=parseInt(myRef.current.price.value);
        cloneProduct[productIndex].image=myRef.current.image.value;
        setproduct(cloneProduct)

        console.log(product)
        navigate('/admin/allProducts');
        
    }
  return (
<div>
    {edit.map((item)=>(
          <Form ref={myRef} onSubmit={(e)=>e.preventDefault()} className='edit-boss'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>id</Form.Label>
            <Form.Control name='id'  defaultValue={item.id} className='petti'/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>model</Form.Label>
            <Form.Control name='model'defaultValue={item.model}  className='petti' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>title</Form.Label>
            <Form.Control name='title'  defaultValue={item.title} className='petti'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>price</Form.Label>
            <Form.Control name='price' defaultValue={item.price} className='petti'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>image</Form.Label>
            <Form.Control name='image'  defaultValue={item.image} className='petti' />
          </Form.Group>
    
          <Button onClick={update} variant="primary" type="submit" className='btn-update'>
            UPDATE   </Button>
        </Form>
    ))}

    </div>
  );
}

export default EditProduct;