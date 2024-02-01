import {Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react";
import AddItem from "./AddItem";

export type Item = {
  product :string;
  amount: number;
}

const App = () => {
  const[items,setItems] = useState<Item[]>([])

  const addItem = (item: Item) =>{
    setItems([...items, item]);
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h3">
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>

    <AddItem addItem={addItem} />
    <List>
      {
        items.map((item,index)=>
        <ListItem key={index}>
          <ListItemText primary={item.product} secondary={item.amount}/>
        </ListItem>
      )}
    </List>

    </Container>
  )
}

export default App