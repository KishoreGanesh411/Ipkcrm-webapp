import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";

type LeadFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  leadSource: string;
  referralName?: string;
};

const leadOptions = [
  { value: "meta", label: "Meta" },
  { value: "youtube", label: "YouTube" },
  { value: "website", label: "Website" },
  { value: "referral", label: "Referral" },
  { value: "others", label: "Others" },
];

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    leadSource: "",
    referralName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, leadSource: value, referralName: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead Data:", formData);
    // ready to store in table
  };

  return (
    <ComponentCard title="Lead Entry Form">
      <form className="lead-form space-y-6" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="leadSource">Lead Source</Label>
          <Select
            options={leadOptions}
            placeholder="Select lead source"
            onChange={handleSelectChange}
            value={formData.leadSource}
            className="dark:bg-dark-900"
          />
        </div>

        {formData.leadSource === "referral" && (
          <div>
            <Label htmlFor="referralName">Referral Name</Label>
            <Input
              id="referralName"
              name="referralName"
              type="text"
              placeholder="Enter referral name"
              value={formData.referralName}
              onChange={handleChange}
            />
          </div>
        )}

        <button
          type="submit"
          className="submit-btn w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Submit
        </button>
      </form>
    </ComponentCard>
  );
}