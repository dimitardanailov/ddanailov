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

### Problems

- **Regression** - A model that outputs a single value. For example, an estimate of a house’s value.
- **Classification** - A model that outputs a probability distribition across several categories. For example, in Fashion MNIST, the output was 10 probabilities, one for each of the different types of clothing. Remember, we use Softmax as the activation function in our last Dense layer to create this probability ditribution.