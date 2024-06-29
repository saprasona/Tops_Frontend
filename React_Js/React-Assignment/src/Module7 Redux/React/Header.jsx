import React from 'react';
import { Button } from 'reactstrap';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crud Redux</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button color="link" className="text-white">
                Home
              </Button>
            </li>
            <li>
              <Button color="link" className="text-white">
                About
              </Button>
            </li>
            <li>
              <Button color="link" className="text-white">
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
