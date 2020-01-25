### Tensorflow Conversion 

- Configure the Model Optimizer for TensorFlow
- Freeze the TF model if your model is not already frozen
- Or use the seperate instructions to convert a non-fozen model
- Convert the TF model with the model Optimizer to an optimized IR
	- May want/need certain general or TF-specific arguments
- Test the model in the IR format using the Inference Engine 