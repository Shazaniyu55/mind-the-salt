"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';

const PracticalGuide: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <Navigation />
        <br /><br /><br />

        <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
          <h1>Practical Guide to Dietary Salt Reduction</h1>
          <p>Here is a brief practical guide with tips for reducing salt intake:</p>

          <h2>Cutting Down on Salt</h2>
          <p>Cutting down on salt does not have to be complicated. Here are some straightforward tips to help you reduce salt in your daily meals:</p>

          <ol>
            <li><strong>Cook at Home:</strong> Preparing your own meals gives you control over how much salt is added. Focus on using fresh ingredients instead of processed foods, which often contain high levels of salt.</li>
            <li><strong>Understand Food Labels:</strong> Learn to read food labels to check the sodium content. Foods with less than 120 mg of sodium per 100 grams are considered low in salt.</li>
            <li><strong>Use Fresh Ingredients:</strong> Fresh fruits, vegetables, meats, and fish generally have lower sodium than their canned or processed counterparts.</li>
            <li><strong>Rinse Canned Goods:</strong> If you use canned vegetables or beans, rinse them under water to wash away some of the added salt.</li>
            <li><strong>Gradually Reduce Salt:</strong> If you are used to a lot of salt, reduce the amount slowly so that your taste buds have time to adjust. Over time, you will start to enjoy foods with less salt.</li>
            <li><strong>Smart Seasoning:</strong> Use herbs, spices, lemon juice, and vinegar instead of salt to flavor your food. These can add zest and complexity to your dishes without the need for extra salt.</li>
          </ol>

          <p><strong>Suggested Reading:</strong></p>
          <ul>
            <li>American Heart Association. (2022). <em>How to Reduce Sodium</em>. An easy guide on cutting down salt in your diet, which can be a key step toward a healthier heart. Available online: <Link href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-to-reduce-sodium">American Heart Association - How to Reduce Sodium</Link></li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PracticalGuide;
