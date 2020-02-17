import argparse
import cv2
import numpy as np

def get_args():
    '''
    Gets the arguments from the command line.
    '''
    parser = argparse.ArgumentParser("Handle an input stream")
    # -- Create the descriptions for the commands
    i_desc = "The location of the input file"

    # -- Create the arguments
    parser.add_argument("-i", help=i_desc)
    args = parser.parse_args()

    return args


def capture_stream(args):
    image_flag = False
    
    if args.i == 'CAM':
        args.i = 0
    elif args.i.endswith('.jpg') or args.i.endswith('.bmp'):
        image_flag = True
    
    input_stream = args.i
    cap = cv2.VideoCapture(input_stream)
    cap.open(args.i)
    
    if not image_flag:
        out = cv2.VideoWrite('out.mp4', cv2.VideoWriter_fourcc('M', 'J', 'P', 'G'), 30 (100, 100))
    else:
        out = None

    # Process frames until the video ends, or process is exited
    while cap.isOpened():
        flag, frame = cap.read()
        if not flag:
            break
        
        key_pressed = cv2.waitKey(60)
        
        frame = cv2.resize(frame, (100, 100))
        frame = cv2.Canny(frame, 100, 200)
        
        if image_flag:
            cv2.imwrite('output_image.jpg', frame)
        else:
            out.write
        
        if key_pressed == 27:
            break
        
    # Release the out writer, capture, and destroy any OpenCV windows
    out.release()
    cap.release()
    cv2.destroyAllWindows()

def main():
    args = get_args()
    capture_stream(args)


if __name__ == "__main__":
    main()
