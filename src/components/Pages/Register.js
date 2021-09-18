import {Link} from "react-router-dom";
function Register()
{

    document.body.className=" bg-gradient-primary";

    return(
        <>
    
         <div class="bg-gradient-primary" >
             
    <div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        
        <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address"/>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Password"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repeat Password"/>
                            </div>
                        </div>
                        <Link to="/login" class="btn btn-primary btn-user btn-block">
                            Register Account
                        </Link>
                        <hr/>
                        <Link to="/" class="btn btn-google btn-user btn-block">
                            <i class="fab fa-google fa-fw"></i> Register with Google
                        </Link>
                        <Link to="/" class="btn btn-facebook btn-user btn-block">
                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                        </Link>
                    </form>
                    <hr/>
                    <div class="text-center">
                        <Link class="small" to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    <div class="text-center">
                        <Link class="small" to="/login">Already have an account? Login!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
         </div>
        </>
    );
}
export default Register;