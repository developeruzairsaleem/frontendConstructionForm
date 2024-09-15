import React from 'react';
// import { CheckCircleIcon, BadgeCheckIcon } from '@heroicons/react/outline'; // For the icons

export default function EstimateCard() {
  return (
    <div className="max-w-md mx-auto w-1/3 p-6 bg-white rounded-lg">
      {/* Estimate Section */}
      <div className="mb-6">
        <h3 className='font-bold text-xl mb-3'>Your estimate</h3>
        <h2 className="text-4xl font-bold">£288</h2>
        <p className="text-gray-500">/ per month</p>
      </div>

      {/* Savings Section */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> */}
            <span>CO2 Savings</span>
          </div>
          <span>£32.45</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <BadgeCheckIcon className="h-6 w-6 text-green-500 mr-2" /> */}
            <span>Performance Savings</span>
          </div>
          <span>£20.32</span>
        </div>
      </div>

      {/* Breakdowns Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Breakdowns</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Local network</span>
            <span>£27.00</span>
          </div>
          <div className="flex justify-between">
            <span>Partner network</span>
            <span>£99.00</span>
          </div>
          <div className="flex justify-between">
            <span>FabricPort</span>
            <span>£25.00</span>
          </div>
          <div className="flex justify-between">
            <span>Connect to Cloud</span>
            <span>£49.00</span>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Additional Services</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>AWS Allocation</span>
            <span>£49.00</span>
          </div>
          <div className="flex justify-between">
            <span>AWS DC</span>
            <span>£39.00</span>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        Continue
      </button>

      {/* Terms and Conditions */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        Lorem ipsum is simply dummy text of the printing. I accept the{' '}
        <a href="#" className="text-indigo-700 underline">
          Terms and Conditions
        </a>.
      </p>
    </div>
  );
}
