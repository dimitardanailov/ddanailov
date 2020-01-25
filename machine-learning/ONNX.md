ONNX Conversion

- Configure the Model Optimizer for ONNX;
- Convert the ONNX model with the Model Optimizer
	- May want/need certain general arguments
- Test the model in the IR format using the Inference Engine.

Example: 

```
python /opt/intel/openvino/deployment_tools/model_optimizer/mo.py --input_model model.onnx
```