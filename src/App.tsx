import { useState } from "react";
import { useQuery } from "react-query";

import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()

export function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = () => null

  const handleAddToCart = () => null

  const handleRemoveFromCart = () => null
 
  if (isLoading) return <LinearProgress/>

  if (error) return <div>Something went wrong ...</div>

  return (
    <div>
      Hello World
    </div>
  );
}