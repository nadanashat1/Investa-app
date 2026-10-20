import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  Box,
  useTheme,
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const BASE_API_URL = "https://1ae0-102-190-139-157.ngrok-free.app";

const ProductTable = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getAuthToken = () => localStorage.getItem("token");

  // دالة لجلب المنتجات من الـ API (GET Request)
  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const token = getAuthToken();
      if (!token) {
        throw new Error("Authentication token not found. Please log in again.");
      }
      const response = await fetch(`${BASE_API_URL}/products/`, { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch products.");
      }

      const data = await response.json();
      setProducts(data);
      setSuccess("Products loaded successfully!");
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpen = (product = null) => {
    setCurrentProduct(product || { name: "", price: "", roi: "", availableQty: "", soldQty: "" });
    setOpen(true);
    setError("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
  };

  // دالة لحفظ (إضافة/تعديل) منتج (POST/PUT Request)
  const handleSave = async () => {
    setError("");
    setSuccess("");
    const token = getAuthToken();
    if (!token) {
      setError("Authentication token not found. Please log in again.");
      return;
    }

    try {
      let apiEndpoint;
      let httpMethod;

      if (currentProduct.id) { // لو المنتج ليه id يبقى تعديل (PUT)
      
        apiEndpoint = `${BASE_API_URL}/products/${currentProduct.id}/`; 
        httpMethod = "PUT";
      } else { // إضافة منتج جديد (POST)
       
        apiEndpoint = `${BASE_API_URL}/products/`; 
        httpMethod = "POST";
      }

      const response = await fetch(apiEndpoint, {
        method: httpMethod,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(currentProduct),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save product.");
      }

      await fetchProducts();
      setSuccess(`Product ${currentProduct.id ? "updated" : "added"} successfully!`);
      handleClose();
    } catch (err) {
      console.error("Error saving product:", err);
      setError(err.message);
    }
  };

  // دالة لحذف منتج (DELETE Request)
  const handleDelete = async (id) => {
    setError("");
    setSuccess("");
    const token = getAuthToken();
    if (!token) {
      setError("Authentication token not found. Please log in again.");
      return;
    }

    try {
      // ******API Endpoint هنا ******
      const response = await fetch(`${BASE_API_URL}/products/${id}/`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete product.");
      }

      setProducts(products.filter((product) => product.id !== id));
      setSuccess("Product deleted successfully!");
    } catch (err) {
      console.error("Error deleting product:", err);
      setError(err.message);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError("");
    setSuccess("");
  };

  return (
    <Box sx={{ backgroundColor: isDarkMode ? theme.palette.background.default : 'white', p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold" color={isDarkMode ? theme.palette.text.primary : "rgba(0, 31, 63, 1)"}>
          Product & Investment Management
        </Typography>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: isDarkMode ? theme.palette.primary.main : "rgba(0, 31, 63, 1)", 
            color: "white", 
            fontWeight: "bold", 
            textTransform: "none", 
            "&:hover": { 
              backgroundColor: isDarkMode 
                ? theme.palette.primary.dark 
                : "rgba(0, 31, 63, 0.8)" 
            } 
          }}
          onClick={() => handleOpen()}
        >
          Add New
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <CircularProgress />
          <Typography ml={2}>Loading products...</Typography>
        </Box>
      ) : (
        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 3, 
            boxShadow: 3,
            backgroundColor: isDarkMode ? theme.palette.background.paper : 'white'
          }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: isDarkMode ? theme.palette.primary.main : "#001F3F" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Product</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>ROI</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Available Qty</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Sold Qty</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">No products found. Add a new one!</TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow 
                    key={product.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: isDarkMode ? alpha(theme.palette.primary.main, 0.1) : alpha('#001F3F', 0.05)
                      }
                    }}
                  >
                    <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{product_name}</TableCell>
                    <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>${product_price}</TableCell>
                    <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{product_roi}</TableCell>
                    <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{product_availableQty}</TableCell>
                    <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{product_soldQty}</TableCell>
                    <TableCell align="center">
                      <IconButton 
                        onClick={() => handleOpen(product)} 
                        sx={{ 
                          '&:hover': {
                            backgroundColor: isDarkMode ? alpha(theme.palette.primary.main, 0.2) : alpha('#001F3F', 0.1)
                          }
                        }}
                      >
                        <EditIcon sx={{ color: isDarkMode ? theme.palette.primary.main : "rgba(0, 31, 63, 1)" }} />
                      </IconButton>
                      <IconButton 
                        onClick={() => handleDelete(product.id)}
                        sx={{ 
                          '&:hover': {
                            backgroundColor: isDarkMode ? alpha(theme.palette.error.main, 0.2) : alpha('#ff0000', 0.1)
                          }
                        }}
                      >
                        <DeleteIcon sx={{ color: isDarkMode ? theme.palette.error.main : "red" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: isDarkMode ? theme.palette.background.paper : 'white'
          }
        }}
      >
        <DialogTitle sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>
          {currentProduct?.id ? "Edit Product" : "Add New Product"}
        </DialogTitle>
        <DialogContent>
          <TextField 
            label="Product Name" 
            name="name" 
            value={currentProduct?.name || ''}
            onChange={handleChange} 
            fullWidth 
            margin="dense"
            sx={{
              '& .MuiInputLabel-root': {
                color: isDarkMode ? theme.palette.text.secondary : 'inherit'
              },
              '& .MuiInputBase-input': {
                color: isDarkMode ? theme.palette.text.primary : 'inherit'
              }
            }}
          />
          <TextField 
            label="Price" 
            name="price" 
            type="number" 
            value={currentProduct?.price || ''}
            onChange={handleChange} 
            fullWidth 
            margin="dense"
            sx={{
              '& .MuiInputLabel-root': {
                color: isDarkMode ? theme.palette.text.secondary : 'inherit'
              },
              '& .MuiInputBase-input': {
                color: isDarkMode ? theme.palette.text.primary : 'inherit'
              }
            }}
          />
          <TextField 
            label="ROI" 
            name="roi" 
            value={currentProduct?.roi || ''}
            onChange={handleChange} 
            fullWidth 
            margin="dense"
            sx={{
              '& .MuiInputLabel-root': {
                color: isDarkMode ? theme.palette.text.secondary : 'inherit'
              },
              '& .MuiInputBase-input': {
                color: isDarkMode ? theme.palette.text.primary : 'inherit'
              }
            }}
          />
          <TextField 
            label="Available Qty" 
            name="availableQty" 
            type="number" 
            value={currentProduct?.availableQty || ''}
            onChange={handleChange} 
            fullWidth 
            margin="dense"
            sx={{
              '& .MuiInputLabel-root': {
                color: isDarkMode ? theme.palette.text.secondary : 'inherit'
              },
              '& .MuiInputBase-input': {
                color: isDarkMode ? theme.palette.text.primary : 'inherit'
              }
            }}
          />
          <TextField 
            label="Sold Qty" 
            name="soldQty" 
            type="number" 
            value={currentProduct?.soldQty || ''}
            onChange={handleChange} 
            fullWidth 
            margin="dense"
            sx={{
              '& .MuiInputLabel-root': {
                color: isDarkMode ? theme.palette.text.secondary : 'inherit'
              },
              '& .MuiInputBase-input': {
                color: isDarkMode ? theme.palette.text.primary : 'inherit'
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose} 
            sx={{ 
              color: isDarkMode ? theme.palette.primary.main : "rgba(105, 169, 244, 1)",
              '&:hover': {
                backgroundColor: isDarkMode ? alpha(theme.palette.primary.main, 0.1) : 'transparent'
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            variant="contained" 
            sx={{ 
              backgroundColor: isDarkMode ? theme.palette.primary.main : "rgba(0, 31, 63, 1)", 
              "&:hover": { 
                backgroundColor: isDarkMode 
                  ? theme.palette.primary.dark 
                  : "rgba(0, 31, 63, 0.8)" 
              } 
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <Snackbar open={!!success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductTable;