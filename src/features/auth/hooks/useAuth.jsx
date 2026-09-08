import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee, registerEmployee } from "../state/auth/authAction";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employee } = useSelector((state) => state.auth);

  // =========================
  // LOGIN STATE
  // =========================

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loginErrors, setLoginErrors] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginStatusMessage, setLoginStatusMessage] = useState(null);

  // =========================
  // REGISTER STATE
  // =========================

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [registerErrors, setRegisterErrors] = useState({});
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerStatusMessage, setRegisterStatusMessage] = useState(null);

  // ==========================================
  // LOGIN FUNCTIONS
  // ==========================================

  const handleLoginChange = (field) => (e) => {
    const value = field === "rememberMe" ? e.target.checked : e.target.value;

    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (loginErrors[field]) {
      setLoginErrors((prev) => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    }

    setLoginErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!validateLogin()) return;

    try {
      setLoginLoading(true);
      setLoginStatusMessage(null);

      const res = await dispatch(
        loginEmployee({
          email: loginData.email,
          password: loginData.password,
        })
      ).unwrap();

      setLoginStatusMessage({
        type: "success",
        text: res?.message || "Authentication successful. Redirecting...",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Login Error:", error);
      setLoginStatusMessage({
        type: "error",
        text:
          error?.message ||
          error?.response?.data?.message ||
          "Invalid email or password",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoginLoading(true);
      setLoginStatusMessage({
        type: "success",
        text: "Google authentication initiated...",
      });
    } catch (error) {
      setLoginStatusMessage({
        type: "error",
        text: "Google authentication failed",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  // ==========================================
  // REGISTER FUNCTIONS
  // ==========================================

  const handleRegisterChange = (field) => (e) => {
    const value = field === "agreeTerms" ? e.target.checked : e.target.value;

    setRegisterData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (registerErrors[field]) {
      setRegisterErrors((prev) => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  const validateRegister = () => {
    const newErrors = {};

    // Full Name
    if (!registerData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email
    if (!registerData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password
    if (!registerData.password) {
      newErrors.password = "Password is required";
    } else if (registerData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password
    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setRegisterErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!validateRegister()) return;

    try {
      setRegisterLoading(true);
      setRegisterStatusMessage(null);

      const res = await dispatch(
        registerEmployee({
          name: registerData.fullName,
          email: registerData.email,
          password: registerData.password,
        })
      ).unwrap();

      setRegisterStatusMessage({
        type: "success",
        text: res?.message || "Account created successfully! Redirecting to login...",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      console.error("Register Error:", error);
      setRegisterStatusMessage({
        type: "error",
        text:
          error?.message ||
          error?.response?.data?.message ||
          "Registration failed",
      });
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setRegisterLoading(true);
      setRegisterStatusMessage({
        type: "success",
        text: "Google signup initiated...",
      });
    } catch (error) {
      setRegisterStatusMessage({
        type: "error",
        text: "Google signup failed",
      });
    } finally {
      setRegisterLoading(false);
    }
  };

  // ==========================================
  // RETURN
  // ==========================================

  return {
    // CURRENT USER
    employee,

    // LOGIN
    loginData,
    loginErrors,
    loginLoading,
    loginStatusMessage,
    handleLoginChange,
    handleLoginSubmit,
    handleGoogleLogin,

    // REGISTER
    registerData,
    registerErrors,
    registerLoading,
    registerStatusMessage,
    handleRegisterChange,
    handleRegisterSubmit,
    handleGoogleSignup,
  };
};

export default useAuth;