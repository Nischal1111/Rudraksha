import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Checkbox,
  Input
} from "@nextui-org/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Login from "../Login/Login";
import { registerUser } from "@/services/user";
import Alert from "../Alert";

const schema = z.object({
    username: z
        .string()
        .transform((value) => value.replaceAll(" ", ""))
        .pipe(z.string().min(1, { message: "Username is required" })),
    email: z.string().email(),
    password: z.string().min(6, { message: "Must be 6 or more characters long" }),
    isTermsAgreed: z.boolean().refine((val) => val === true, {
        message: "Please accept the terms and conditions",
    }),
});

type FormFields = z.infer<typeof schema>;

interface Props {
    isOpen:boolean
    onOpenChange: (isOpen: boolean) => void;
}

    const Signup: React.FC<Props> = ({ isOpen, onOpenChange }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal

    // Initializing form validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    // Initializing useMutation for handling the signup
    const { data, mutate, error, isPending } = useMutation({ //eslint-disable-line @typescript-eslint/no-unused-vars
        mutationFn: registerUser,
        onSuccess: (data) => { //eslint-disable-line @typescript-eslint/no-unused-vars
        onOpenChange(false); // Close signup modal
        setIsLoginOpen(true); // Open login modal
        },
        onError: (error: any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
        const message =
            error.response.data.error.message || "An error occurred during signup.";
        setErrorMessage(message);
        },
    });

    // Handling form submission
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        setErrorMessage(null); // Clear previous errors
        mutate(data);
    };

    return (
        <>
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="opaque"
            placement="center"
            className="p-2 lg:p-4 mx-4 lg:mx-0"
        >
            <ModalContent>
            <>
                <ModalHeader className="flex flex-col gap-2">
                <h1>Create an Account</h1>
                <p className="text-sm text-gray-400 font-normal">
                    Kindly fill in your details to create an account
                </p>
                </ModalHeader>
                <ModalBody>
                {errorMessage && <Alert message={errorMessage} />}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                >
                    <Input
                    isRequired
                    label="Username"
                    labelPlacement="outside"
                    placeholder="eg. John Doe"
                    type="text"
                    variant="bordered"
                    autoComplete="off"
                    size="md"
                    classNames={{
                        label: "!text-black",}}
                    radius="sm"
                    isInvalid={!!errors.username}
                    errorMessage={errors.username?.message}
                    {...register("username")}
                    />
                    <Input
                    isRequired
                    autoComplete="off"
                    autoFocus
                    label="Email"
                    labelPlacement="outside"
                    placeholder="eg. johndoe@gmail.com"
                    type="email"
                    classNames={{
                        label: "!text-black",}}
                    variant="bordered"
                    radius="sm"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    {...register("email")}
                    />
                    <Input
                    isRequired
                    label="Password"
                    autoComplete="off"
                    labelPlacement="outside"
                    placeholder="Create a password"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                    classNames={{
                        label: "!text-black",}}
                    endContent={
                        <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        >
                        {isVisible ? (
                            <LuEye
                            size={22}
                            className="text-2xl text-default-400 pointer-events-none"
                            />
                        ) : (
                            <LuEyeOff
                            size={22}
                            className="text-2xl text-default-400 pointer-events-none"
                            />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    size="md"
                    radius="sm"
                    {...register("password")}
                    />
                    <div className="py-2 px-1">
                    <Checkbox
                        size="sm"
                        radius="sm"
                        classNames={{
                        label: "text-small text-gray-400",
                        }}
                        {...register("isTermsAgreed")}
                    >
                        I agree to terms & conditions
                    </Checkbox>
                    {errors.isTermsAgreed && (
                        <p className="text-danger text-sm mt-2">
                        {errors.isTermsAgreed.message}
                        </p>
                    )}
                    </div>
                    <div>
                    <Button
                        type="submit"
                        className="bg-primary w-full text-white rounded-sm"
                        isLoading={isPending}
                    >
                        Create Account
                    </Button>
                    </div>
                </form>
                </ModalBody>
            </>
            </ModalContent>
        </Modal>

        {/* Login Component */}
        <Login isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} />
        </>
    );
    };

export default Signup;
