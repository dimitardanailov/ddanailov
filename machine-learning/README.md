- **Feature** - The input(s) to our model
- **Examples** - An output/output pair used for training
- **Labels** - The output of the model
- **Layer** - A collection of nodes connected together within a neural network.
- **Model** -  The representation of your neural network.
- **Dense and Fully Connected (FC)**: Each node in one layer is connected to each node in the previous layer.
- **Weights and biases** - The internal variables of model
- **Loss** - The disperancy between the desired output and the actiual output
- **MSE** - Mean squared error, a type of loss function that counts a small number of large discrepancies as worse than a large numbers of small ones.
- **Gradient Descent** - An algorithm that changes the internal variables a bit at a time to gradually reduce the loss function.
- **Optimizer** - A specific implementation of the gradient descent algorithm.
- **Learning rate** - The "step size" for loss improvement during gradient descent.
- **Batch** - The set of examples used during training of the neural network
- **Epoch** - A full pass over the entire training dataset
- **Forward pass** - The compulation of output values from input
- **Backward pass(backpropagation)** - The calculation of the internal variables adjustments according to the optimizer algorithm, starting from the output layer and working back through each layer to the input.

### Model Optimizer

What is the model optimizer?

- Converts models from multiple frameworks to an Intermediate Representation(IR) for the Inference Engine;
- Can perform various optimizations to shrink & speed up;

The model Optimizer affects Accuracy

- It does not improve inference accuracy;
- Some changes, such as lowering precision, can lower accuracy;
- Losess in Accuracy are minimized;

### Optimization Techniques

##### Quantization

Quantization is related to the topic of precision I mentioned before, or how many bits are used to represents the weights and biases of the model. During training. having these very accurate numbers can be helpful, but it's often the case in inference that the precision can be reduced without substantial loss of accuracy. Quantization is the process of reducing the precision of a model.

##### Freezing 

Freezing in this context is used for TensorFlow models. Freezing TensorFlow models will remove certain options and metadata only needed for training, sucs as those related to backpropagation. Freezing a TensorFlow model is usually a good idea whether before performing direct inference or converting wit the Model Optimizer.

##### Fusion

Fusion relates to combining multiple layer operations into a single operation. For example, a batch normalization layer, activation layer, and convolutional layer could be combined into a single operation. This can be particularly useful for GPU inference, where the seperate operations may occurs on seperate GPU kernels, while a fused operation occurs on one kernel, thereby incurring less overhead in switching from one kernel to the next.

### What are Intermediate Representations (IR) ?

- IRs are like a shared of neural network layers;
- Conv2D (TF), Convolution (Caffe) and Conv (ONNX) are all a `Convolution` layer in an IR;
- Have any desired optimizations performed;

Intermediate Representations (IR) details

Requires two file types: 
- `.xml` - model architecture
- `.bin` - weights and biases

The two files are required by inference.

### What is the Inference Engine?

- Runs the actual inference on a model(IR) at the edge
- Optimized for Inter Hardware
- Provides a straightforward API so you can focus more on your edge application self

### Why Cut a model ?

- Mostly applicable for TensorFlow models
- Pre/post-procesing
- Un-used parts
- Too complex/unsupported ops
- SSD models post-processing
- Lacalize an issue

### Problems

- **Regression** - A model that outputs a single value. For example, an estimate of a house’s value.
- **Classification** - A model that outputs a probability distribition across several categories. For example, in Fashion MNIST, the output was 10 probabilities, one for each of the different types of clothing. Remember, we use Softmax as the activation function in our last Dense layer to create this probability ditribution.