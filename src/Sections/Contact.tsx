import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  number: z.number(),
});

type FormFields = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-5 md:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="input" className="px-1">
          Name:{" "}
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Full Name"
          className="p-1"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="input" className="px-1">
          Email:{" "}
        </label>
        <input
          {...register("email")}
          type="text"
          placeholder="Email Address"
          className="p-1"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="input" className="px-1">
          Number:{" "}
        </label>
        <input
          {...register("number")}
          type="text"
          placeholder="Phone Number"
          className="p-1"
        />
        {errors.number && (
          <div className="text-red-500">{errors.number.message}</div>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-primary py-2 rounded-lg mb-5"
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  );
};

export default Contact;
