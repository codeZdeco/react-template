import { useTheme } from '@mui/material';
import { ChangeEvent, useMemo, useState } from 'react';
import { Stack, Grid, Box, TextField, IconButton, Icon, InputAdornment, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const _products = {
  '1': {
    name: 'Product 1',
    quantity: 25,
  },
  '2': {
    name: 'Product 2',
    quantity: 21,
  },
  '3': {
    name: 'Product 3',
    comment: 'hello',
    quantity: 56,
  },
  '4': {
    name: 'Product 4',
    comment: 'mike',
    quantity: 1,
  },
}

const filterSearchText = (props: { search: string, list: Array<any>, fields: Array<string> }) => {
  const { search, list, fields } = props;

  return list?.filter((item: any) => {
    // fields = [name, comment]
    // itemText = Product 3 hello
    const itemText = fields.reduce((prevField: string, currField: string) => [item[prevField], item[currField]].join(" "));
    return itemText.includes(search);
  });
};

const sortRecords = (props: { direction: string, list: Array<any>, field: string }) => {

};



function ProductList() {
  // const [products, setProducts] = useState(_products);
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  const conditionRules = useMemo(() => [
    [
      filterSearchText,
      {
        list: Object.values(_products),
        search: searchText,
        fields: ['name', 'comment'],
      }
    ],
  ], [searchText]);

  const products = useMemo(() => {
    let result: any[] = [];

    conditionRules.map((condition: any) => {
      const [callback, args] = condition;
      result = callback(args);
    });
    return result;
  }, [conditionRules]);

  return <Box className='w-full h-full flex flex-col gap-2'>
    <Stack flexDirection={'row'} gap={2}>
      <TextField value={searchText} onChange={handleChangeSearchText} variant='outlined' size='small' placeholder='Search for products' InputProps={{
        endAdornment: <InputAdornment position='end'>
          <Icon>search</Icon>
        </InputAdornment>
      }} />
      <IconButton>
        <Icon>filter_alt</Icon>
      </IconButton>
    </Stack>
    <List>
      {
        products.map((product: any) => (
          <ListItem secondaryAction={<Box className='w-5 h-5 rounded-full bg-lime-700 text-[10px] flex items-center justify-center' sx={{ color: 'text.primary' }}>{product.quantity}</Box>}>
            <ListItemIcon>
              <Icon>inventory_2</Icon>
            </ListItemIcon>
            <ListItemText sx={{ color: 'text.primary' }}>
              {product.name}
            </ListItemText>
          </ListItem>
        ))
      }
    </List>
  </Box>
}

function ProductDetail() {
  return <Box></Box>
}

function ProductPage() {
  const theme = useTheme();

  return <Grid container className='w-full h-full'
    sx={{
      backgroundColor: 'background.paper',
      borderRadius: theme.spacing(2),
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2),
    }}>
    <Grid item xs={4}>
      <ProductList />
    </Grid>
    <Grid item xs={8}>
      <ProductDetail />
    </Grid>
  </Grid>
}

export default ProductPage;
