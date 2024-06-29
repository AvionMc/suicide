import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const features = [
    { id: "cb1", title: "Combat", emoji: "🔥" },
    { id: "cb2", title: "AntiLock", emoji: "🐛" },
    { id: "cb3", title: "Customization", emoji: "👀" },
    { id: "cb4", title: "Gameplay", emoji: "🎲" },
    { id: "cb5", title: "Image", emoji: "🖼️" },
];

const commands = [
    { command: "$command1", description: "Description of command" },
    { command: "$command2", description: "Description of command" },
    { command: "$command3", description: "Description of command" },
];

export default function Features() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Head>
                <title>Features</title>
                <meta name="description" content="Features page | A roblox lua script for da hood made with ❤️" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="about-section">
                <nav className="accordion arrows" id="features">
                    <header className="box">
                        <label htmlFor="acc-close" className="box-title h-color">
                            Features 🔥
                        </label>
                    </header>
                    {features.map((feature) => (
                        <section key={feature.id} className="box">
                            <input type="radio" name="accordion" id={feature.id} />
                            <label className="box-title p-color" htmlFor={feature.id}>
                                {feature.title} {feature.emoji}
                            </label>
                            <label className="box-close" htmlFor="acc-close"></label>
                            <div className="box-content p-color">
                                <ul>
                                    {commands.map((cmd, index) => (
                                        <li key={index}>
                                            <kbd>{cmd.command}</kbd> - <span className="p-color">{cmd.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    ))}
                    <input type="radio" name="accordion" id="acc-close" />
                </nav>
            </section>
            <Footer />
        </motion.div>
    );
}