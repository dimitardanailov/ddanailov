1) 

Using Image Generator, how do you label images?

Answer: It’s based on the directory the image is contained in

!!! 
TensorFlow figures it out from the contents
You have to manually do it

2) What method on the Image Generator is used to normalize the image?

Answer: 

!!! 
normalize
normalize_image
Rescale_image

3) How did we specify the training size for the images?

Answer: The target_size parameter on the training generator

4) When we specify the input_shape to be (300, 300, 3), what does that mean?

Answer: Every Image will be 300x300 pixels, with 3 bytes to define color

5) If your training data is close to 1.000 accuracy, but your validation data isn’t, what’s the risk here?

Answer: You’re overfitting on your training data

6) Convolutional Neural Networks are better for classifying images like horses and humans because:

Answer: All of the above

7) 
After reducing the size of the images, the training results were different. Why?

Answer: We removed some convolutions to handle the smaller images