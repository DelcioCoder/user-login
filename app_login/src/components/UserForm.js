import styles from './UserForm.module.css';
import image from '../images/loginr.png';

function UserForm(){
    

    return (
        <div className={styles.user_form}>
            <img src={image} alt="myimage" className={styles.image}/>
           
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <input type="submit" value="login" className={styles.submit}  />
            </form>
        </div>
    )

}


export default UserForm;