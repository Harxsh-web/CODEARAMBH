"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  teamName: z.string().min(2, { message: "Team name is required." }),
  teamSize: z.string().min(1, { message: "Team size is required." }),
  preferredTheme: z.string().min(1, { message: "Preferred theme is required." }),
  leaderName: z.string().min(2, { message: "Leader's name is required." }),
  leaderEmail: z.string().email({ message: "Valid email is required." }),
  leaderPhone: z.string().min(10, { message: "Valid phone number is required." }),
  projectIdea: z.string().min(10, { message: "Project idea must be at least 10 characters." }),
  videoGoogleDriveUrl: z.string().url({ message: "Valid video Google Drive URL required" }),
  pptGoogleDriveUrl: z.string().url({ message: "Valid presentation Google Drive URL required" }),
  members: z.array(
    z.object({
      name: z.string().min(2, { message: "Member name is required." }),
      email: z.string().email({ message: "Valid email is required." }),
      phone: z.string().min(10, { message: "Valid phone number is required." }),
    })
  ),
});

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      teamSize: "2",
      preferredTheme: "",
      leaderName: "",
      leaderEmail: "",
      leaderPhone: "",
      projectIdea: "",
      videoGoogleDriveUrl: "",
      pptGoogleDriveUrl: "",
      members: [{ name: "", email: "", phone: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const [teamSize, setTeamSize] = useState(2);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const newSize = teamSize - 1;
    const currentSize = fields.length;

    if (newSize > currentSize) {
      for (let i = currentSize; i < newSize; i++) {
        append({ name: "", email: "", phone: "" });
      }
    } else {
      for (let i = currentSize; i > newSize; i--) {
        remove(i - 1);
      }
    }
  }, [teamSize, append, remove, fields.length]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
      if (key === "members") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    console.log("Form Data:", Object.fromEntries(formData));
    try {
        const response = await fetch(`https://codearambh-backend.onrender.com/api/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData)),
        });
  
        const result = await response.json();
        console.log(result)
        if (!response.ok) {
          toast.error("Something went wrong!!!");
          throw new Error(result.error || "Something went wrong");
        }
  
        // Success: Hide form and show message
        toast.success("Registration successful!");
        setFormSubmitted(true);
      } catch (error) {
        toast.error(error.message);
      }
  };

  return (
    <div className="m-5">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Join Us</CardTitle>
          <CardDescription className="text-lg">
            Fill out the form below to register your team for{" "}
            <span className="text-black font-semibold">
              <span className="text-red-500">CODE</span>ARAMBH.
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          {formSubmitted ? (
            <div className="text-center text-green-600 font-semibold text-lg">
              🎉 Registration Successful! 
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 inp">
              {/* Team Name */}
              <div className="space-y-2 ">
                <Label>Team Name</Label>
                <Input {...register("teamName")} placeholder="Enter your team name..." />
                {errors.teamName && <p className="text-red-500">{errors.teamName.message}</p>}
              </div>

              {/* Team Size & Theme */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Team Size */}
                <div className="w-full space-y-2">
                  <Label>Team Size</Label>
                  <Controller
                    name="teamSize"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        onValueChange={(value) => {
                          field.onChange(value);
                          setTeamSize(Number(value));
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Team Size</SelectLabel>
                            {[1, 2, 3, 4].map((size) => (
                              <SelectItem key={size} value={String(size)}>
                                {size} Member{size > 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.teamSize && <p className="text-red-500">{errors.teamSize.message}</p>}
                </div>

                {/* Preferred Theme */}
                <div className="w-full space-y-2">
                  <Label>Preferred Theme</Label>
                  <Controller
                    name="preferredTheme"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Themes</SelectLabel>
                            <SelectItem value="open-innovation">Open Innovation</SelectItem>
                            <SelectItem value="web3-blockchain">Web3 & Blockchain</SelectItem>
                            <SelectItem value="ai">AI</SelectItem>
                            <SelectItem value="education-system">Education System</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.preferredTheme && (
                    <p className="text-red-500">{errors.preferredTheme.message}</p>
                  )}
                </div>
              </div>

              {/* Leader Details */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Leader's Name</Label>
                  <Input {...register("leaderName")} placeholder="Full name" />
                  {errors.leaderName && <p className="text-red-500">{errors.leaderName.message}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input {...register("leaderEmail")} type="email" placeholder="Email address" />
                    {errors.leaderEmail && (
                      <p className="text-red-500">{errors.leaderEmail.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input {...register("leaderPhone")} type="tel" placeholder="Phone number" />
                    {errors.leaderPhone && (
                      <p className="text-red-500">{errors.leaderPhone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Idea */}
              <div className="space-y-2">
                <Label>Project Idea</Label>
                <Textarea
                  {...register("projectIdea")}
                  placeholder="Describe your project idea (minimum 10 characters)"
                  className="min-h-[100px]"
                />
                {errors.projectIdea && <p className="text-red-500">{errors.projectIdea.message}</p>}
              </div>

              {/* Google Drive URLs */}
              <div className="space-y-2">
                <Label>Project Video URL (Google Drive)</Label>
                <Input 
                  {...register("videoGoogleDriveUrl")} 
                  type="url" 
                  placeholder="https://drive.google.com/..." 
                />
                {errors.videoGoogleDriveUrl && (
                  <p className="text-red-500">{errors.videoGoogleDriveUrl.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Presentation URL (Google Drive)</Label>
                <Input 
                  {...register("pptGoogleDriveUrl")} 
                  type="url" 
                  placeholder="https://drive.google.com/..." 
                />
                {errors.pptGoogleDriveUrl && (
                  <p className="text-red-500">{errors.pptGoogleDriveUrl.message}</p>
                )}
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                {fields.map((member, index) => (
                  <div key={member.id} className="space-y-2 border-t pt-4">
                    <h4 className="font-medium">Member {index + 1}</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Input {...register(`members.${index}.name`)} placeholder="Full name" />
                        {errors.members?.[index]?.name && (
                          <p className="text-red-500 text-sm">
                            {errors.members[index].name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Input
                          {...register(`members.${index}.email`)}
                          type="email"
                          placeholder="Email address"
                        />
                        {errors.members?.[index]?.email && (
                          <p className="text-red-500 text-sm">
                            {errors.members[index].email.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Input
                          {...register(`members.${index}.phone`)}
                          type="tel"
                          placeholder="Phone number"
                        />
                        {errors.members?.[index]?.phone && (
                          <p className="text-red-500 text-sm">
                            {errors.members[index].phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <CardFooter className="p-0 pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </Button>
              </CardFooter>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
