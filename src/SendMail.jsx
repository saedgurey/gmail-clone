import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "../config/firebase";
import firebase from "firebase/compat/app"


const SendMail = () => {
  const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
      
        db.collection("emails").add({
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    
        dispatch(closeSendMessage());
    
    }

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                  onClick={()=>dispatch(closeSendMessage())}
                className='sendMail__close' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("to", { required: true })}
                />
                {errors.to && <p className="sendMail__error">To is Required!</p>}

                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: true })}
                />
                {errors.subject && (
                    <p className="sendMail__error">Subject is Required!</p>
                )}

                <input
                    name="message"
                    placeholder="Message"
                    type="text"
                    className="sendMail__message"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <p className="sendMail__error">Message is Required!</p>
                )}

                <div className="sendMail__options">
                    <Button
                  
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="sendMail__send"

                    >send</Button>

                </div>

            </form>
        </div>
    )
}

export default SendMail;