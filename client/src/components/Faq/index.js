import React from "react";
require("dotenv").config();

function Faq() {
    return(
<div>
    <h1 className="faq">Frequently Asked Questions</h1>
    <ul>
        <li>
            <h2 className="faqQ">How long will my Oysters keep?</h2>
            <p className="faqA">Your Oysters will keep in the refrigerator for 7-10 days if you store them correctly!</p>
        </li>
        <li>
            <h2 className="faqQ">How should I store Oysters?</h2>
            <p className="faqA">When you receive your Oysters, take them out of the package as soon as you can. It's a good idea to put the Oysters in a mesh bag in a large bowl so that they don't leak in your refrigerator. Put a damp cloth over the bowl. If you follow these steps, your Oysters should keep for 5-7 days. Try to refresh the damp cloth daily to keep them chilled and moist for the best results.</p>
        </li>
        <li>
            <h2 className="faqQ">Should I put the Oysters on ice?</h2>
            <p className="faqA">You should wait to put your Oysters on ice until you are ready to serve them. Oysters do not like fresh water because it kills them! Melted ice will hurt the Oysters, so wait until you're ready to eat them to start the killing process ;) </p>
        </li>
        <li>
            <h2 className="faqQ">How do I open (shuck) Oysters?</h2>
            <p className="faqA"> If you've never opened Oysters before, it can seem like a daunting tasks. Thankfully, we provide a shucking knife and gloves in our  <a href="./Shophome">store</a>. You should ensure that you have these items on hand before you start the process.</p> 
            <p className="faqA">Take the Oyster in your gloved hand, with the deeper shell facing downwards. Do this over a bowl to catch any of the juices trapped in the shell. Hold it firmly as you slide the knife between the two shells. Move the knife to pry the halves apart. Move the knife blade to the hinge of the shell. Cut the muscle that holds the shell together, then remove the top shell.
            The best way to learn how to open Oysters is to watch someone do it. You can view <a href="https://www.youtube.com/watch?v=n_YPxcF1ta4">this</a> video to learn more.</p>
        </li>
        <li>
            <h2 className="faqQ">Can I eat Oysters year round?</h2>
            <p className="faqA">Yes! You can eat our Oysters year round because we ensure that we properly refrigerate our little buddies before they find their final home with you.</p>
        </li>
        <li>
            <h2 className="faqQ">How should I serve Oysters?</h2>
            <p className="faqA">Oysters can be served many different ways! Oysters can be broiled, poached, steamed, roasted, baked or fried. You can bake, grill, pan-fry, roast or steam Oysters while they are still in their shells. You can learn about some popular ways to serve Oysters <a href="https://www.southernliving.com/food/entertaining/oyster-recipes-0?slide=5c67fece-86c6-4865-b90e-c7effc0e7ae9#5c67fece-86c6-4865-b90e-c7effc0e7ae9">here</a> </p>
        </li>
        <li>
            <h2 className="faqQ">I am having an issue with my order, what should I do?</h2>
            <p className="faqA">Your satisfaction is our greatest priority! If you are having difficulty with your order, we want to resolve the issue as soon as possile. Please give us a call at <a href="tel:6155555555">(615) 555 5555</a>or send us an e-mail at:  <a href="mailto:roysterss@gmail.com">roysters@gmail.com</a>. We will respond within one business day to resolve your issue.  </p>
        </li>
    </ul>
</div>
    )
}

export default Faq;