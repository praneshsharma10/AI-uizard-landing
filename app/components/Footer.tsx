"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="pt-60 bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* //footer content */}


        <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* first column */}

          <div>
            <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mb-4 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Uizard</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0 ">
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Product</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">AI UI Design</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Design Assistant</Link></li>
              <li>
                <div className="flex items-center gap-2">
                  <Link href="/autodesigner" className="text-[0.875rem] text-white hover:text-white transition">Autodesigner 2.0</Link>
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-purple-700 text-xs text-white px-2 py-0.5 rounded-md">NEW</span>
                </div>
              </li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Screenshot Scanner</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Wireframe Scanner</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">UI Design</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">UX Design</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Wireframing</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Mockups</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Prototyping</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Uizard vs Other UI Tools</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Figma Alternative</Link></li>
            </ul>
          </div>

          {/* column 2 */}
          <div>
            <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mb-6 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Templates</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">UI Design Templates</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Mobile App Templates</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Website Templates</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Web App Templates</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Tablet App Templates</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">UI Components Library</Link></li>
            </ul>

            <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mt-8 mb-6 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Wireframes</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">App Wireframe Templates</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Website Wireframe Templates</Link></li>
            </ul>
          </div>

          {/*column 3 */}
          <div>
            <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mb-6 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Solutions</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Product Managers & Product Teams</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Designers & UX Pros</Link></li>
              <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">Marketers</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Business Analysts</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Startup Founders</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Consultants & Agencies</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Developers</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Enterprise</Link></li>
            </ul>
          </div>

          {/* column 4 */}
          <div>
            <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mb-6 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Resources</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">Blog</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Help Center</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Contact</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">About</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Pricing</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Careers</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Research</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Press</Link></li>
              <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Releases</Link></li>
            </ul>
          </div>

          {/* column 5 */}
          <div>
            
            <div className="mb-8">
              <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mb-6 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Social Media</p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">Facebook</Link></li>
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">Twitter</Link></li>
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">LinkedIn</Link></li>
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">Instagram</Link></li>
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">Pinterest</Link></li>
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">TikTok</Link></li>
                <li><Link href="" className="text-[0.875rem] text-white hover:text-white transition">YouTube</Link></li>
              </ul>
            </div>
            
          </div>

            {/* column 6 */}
            <div>
              <p className="font-[640] text-[1rem] leading-[1.375rem] tracking-[-0.1px] mb-6 font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif] text-white">Legal</p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Terms Of Service</Link></li>
                <li><Link href="/" className="text-[0.875rem] text-white hover:text-white transition">Cookie Settings</Link></li>
              </ul>
            </div>

        </div>


        {/* copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-[0.875rem] text-white font-['Satoshi-Variable',_Helvetica,_'Helvetica_Neue',_Arial,_sans-serif]">2025 © Uizard Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;