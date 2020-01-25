### Caffe conversion

- Configure the model Optimizer for Caffe
- Convert the Caffe model with the Model Optimizer
	- May wanted/need certain general or Caffe-specific arguments
- Test the model in the IR Format using the Inference Engine

Example: 

```
python /opt/intel/openvino/deployment_tools/model_optimizer/mo.py --input_model squeezenet_v1.1.caffemodel --input_proto deploy.prototxt
```