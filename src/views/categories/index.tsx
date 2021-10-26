import React, { useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectCategoriesData } from 'redux/selectors/categories';
import { shallowEqual } from 'react-redux';
import { categories } from 'redux/reducers/categories';

// Generate Order Data
// function createData(
//   id: number,
//   date: string,
//   name: string,
//   shipTo: string,
//   paymentMethod: string,
//   amount: number,
// ) {
//   return {
//     id, date, name, shipTo, paymentMethod, amount,
//   };
// }

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

const Categories = () => {
  const dispatch = useAppDispatch();
  const categoriesData = useAppSelector(selectCategoriesData, shallowEqual);

  useEffect(() => {
    dispatch(categories.get());
  }, []);

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Categories
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Descripción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoriesData?.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
