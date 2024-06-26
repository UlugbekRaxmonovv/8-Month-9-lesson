import React,{useState} from 'react';
import { useGetProductsQuery } from '../context/ProductApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Grid } from '@mui/material';
import {Box,Pagination} from '@mui/material';
import { RxValue } from 'react-icons/rx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Products = () => {
   const [page,setPage] = useState(+sessionStorage.getItem("pagination_count") || 1);
   const [perPageCountr, setperPageCountr] = useState(+  localStorage.getItem("pages") || 5);
    const { data,isError,isLoading,isFetching } = useGetProductsQuery({limit: perPageCountr, page: page});
    let totalPagenation=Math.ceil( data?.data?.count / perPageCountr)

    let links =data?.data?.products?.map((product) =>(
        <Card sx={{ maxWidth: 450 }} key={product} >
        <CardActionArea>
          <CardMedia
            component="img"
            style={{width:'200px', height:'200px',objectFit:'cover'}}
            image={product.urls[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            {

            }
            <Typography variant="body2" style={{objectFit:'cover'}}>
             {product.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    ))

    const handelPaginition =(_,value)=>{
      setPage(value)
      sessionStorage.setItem("pagination_count", value)
    }
    const handelPaginitiononSelect = (event)=>{
      let value = event.target.value
      setperPageCountr(value)
      localStorage.setItem("pages",value)
      let result = Math.ceil( page * perPageCountr / value)
      setPage(result)
      sessionStorage.setItem("pagination_count", result)
    }
    return (
        <div className='container'>
         <Grid container spacing={3} p='30px' style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'40px'}}> 
         {links}
         </Grid>
         <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >  
         <div className="pag_all">
         <Box sx={{display:'flex',justifyContent:'center', p:'25px'}}>
         <Pagination count={totalPagenation} color="primary" page={page}  onChange={handelPaginition} />
         </Box>
         </div>
         <div className="pag_all">
         <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Pages</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={perPageCountr}
          onChange={handelPaginitiononSelect}
          autoWidth
          label="Pages"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>
         </div>
         </div>
      
        

    
        </div>
    );
}

export default Products;
