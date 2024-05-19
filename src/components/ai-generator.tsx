import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

const AI_Generator = () => {
  return (
    <form className="flex flex-col gap-4 justify-center mx-2">
      <h1 className="text-center font-bold text-3xl mb-4">AI Generator</h1>
      <Input placeholder="Enter your brand name" className="w-full" />
      <Input placeholder="Enter your brand slogan" className="w-full" />
      <Dialog>
        <DialogTrigger asChild>
          <Button>Please Select A Industry</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Pic A Industry</DialogTitle>
          </DialogHeader>
          <div>
            <h2>Industry 1</h2>
            <h2>Industry 2</h2>
            <h2>Industry 3</h2>
            <h2>Industry 4</h2>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Select color schemes that matches your brand</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>color schemes</DialogTitle>
            <p>You can skip if you are not sure</p>
            <div>Skip</div>
          </DialogHeader>
          <div>
            <h3>Color 1</h3>
            <h3>Color 2</h3>
            <h3>Color 3</h3>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Select font styles that you like</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Font styles</DialogTitle>
            <p>You can also skip and see logo results directly</p>
            <div>Skip</div>
          </DialogHeader>
          <div>
            <h3>Color 1</h3>
            <h3>Color 2</h3>
            <h3>Color 3</h3>
          </div>
        </DialogContent>
      </Dialog>

      <Button className="bg-green-400 hover:bg-green-600">Generate</Button>
    </form>
  );
};

export default AI_Generator;
