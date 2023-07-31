import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useNavigation } from "../hooks/useNavigation";
import { store$ } from "../store";

export function Step1() {
  const { next } = useNavigation();

  const values = store$.form.values.use();
  const errors = store$.form.errors.use();

  function handleInputChange(event) {
    const { name, value } = event.target;

    store$.form.values[name].set(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    next();
  }

  return (
    <div>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />

      <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          id="name"
          type="text"
          onChange={handleInputChange}
          value={values.name}
          error={errors.name}
        />

        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          type="text"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
        />

        <Input
          label="Phone number"
          placeholder="e.g. +1 123 123 123"
          id="phone"
          type="text"
          onChange={handleInputChange}
          value={values.phone}
          error={errors.phone}
        />

        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
}
