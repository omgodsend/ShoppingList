import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useState } from "react";
import {Item} from './App';


type AddItemProps = {
    addItem: (item:Item) => void
}


const AddItem = (props: AddItemProps) => {
    const [open, setOpen] = useState(false);

    const [item, setItem] = useState<Item>({ product: '', amount: 0 });

    const addItem = () => {
        props.addItem(item);
        setItem({ product: '', amount: 0 });
        handleClose();
    };

    

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
<>
    <Button color="success" variant="contained" onClick={handleOpen} >
        Add Item
    </Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
            New Item
        </DialogTitle>

        <DialogContent>
            <TextField value={item.product}
            onChange={e => setItem({...item,product:e.target.value})}
            label="product"
            margin="dense" fullWidth
            ></TextField>
            <TextField value={item.amount}
            onChange={e => setItem({...item,amount:e.target.value})}
            label="amount"
            margin="dense" fullWidth
            ></TextField>
            <DialogActions>
                <Button color="error" onClick={handleClose}>Cancel</Button>
                <Button color="primary" onClick={addItem}>Add</Button>
            </DialogActions>
        </DialogContent>

    </Dialog>
</>

    )
}

export default AddItem