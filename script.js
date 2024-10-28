// JavaScript for handling 'Read More' functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const modal = document.getElementById('article-modal');
    const modalContent = document.getElementById('modal-article-content');
    const closeBtn = document.querySelector('.close-btn');
    const maximizeBtn = document.querySelector('.maximize-btn');

    let isMaximized = false;

    const articles = {
        'ai-article': `
            <h2>AI Project: Smart Home Automation</h2>

            <h4>Introduction</h4>
            <p>Artificial Intelligence (AI) is transforming our daily lives in ways we couldn’t have imagined a few decades ago. One of the most promising applications of AI is in the development of smart home systems. These systems leverage AI and Internet of Things (IoT) technologies to automate household activities, enhance comfort, and improve energy efficiency. In this project, we explore the integration of AI in smart home environments, showcasing how this technology can make our homes more intelligent and responsive to our needs.
            The goal of this project is to create a fully automated home system that can learn from user behavior, predict their preferences, and optimize various settings in the home. Whether it’s adjusting the lighting, controlling the temperature, or enhancing security, AI can take the user experience to a whole new level.</p>

            <!-- Image 1 (left-aligned) -->
            <div style="float: left; margin-right: 20px; width: 40%;">
                <img src="smart-home-automation.jpeg" alt="AI Smart Home" style="width: 100%; border-radius: 5px;">
            </div>

            <h4>Understanding AI in Smart Homes</h4>
            <p>AI plays a critical role in enabling smart home systems to function effectively. By using advanced algorithms and machine learning, the system can gather data from various sensors and IoT devices, such as smart thermostats, lights, and security cameras. This data is then processed in real-time to create personalized recommendations and automate routine tasks.
            The AI system continuously monitors user activity and makes adjustments to improve comfort. For instance, if the system detects that the user prefers a certain temperature in the evening, it will automatically adjust the thermostat before the user returns home. Similarly, the system can manage lighting based on the time of day and room occupancy.</p>

            <h4>Automation for Convenience and Efficiency</h4>
            <p>One of the key benefits of smart home systems is the level of automation they offer. Gone are the days of manually adjusting the thermostat or remembering to turn off the lights before leaving the house. With AI, these tasks are handled effortlessly.</br>
            </br>AI-driven smart home systems can automate numerous tasks, including:
                <ul>
                    <li>Adjusting thermostats based on daily weather patterns.</li>
                    <li>Automatically locking doors and activating the security system when the user leaves the house.</li>
                    <li>Scheduling appliance use during off-peak energy hours to save on utility bills.</li>
                    <li>Monitoring and controlling energy consumption to reduce the environmental impact.</li>
                </ul>
            With AI's ability to process data from multiple sources, the system learns the user’s preferences and adjusts various parameters accordingly. The more data the system collects, the more accurate and efficient it becomes at predicting user needs and optimizing home operations.
            </p>

            <!-- Image 2 (right-aligned) -->
            <div style="float: right; margin-left: 20px; width: 40%;">
                <img src="smart-home-automation.jpeg" alt="Energy Optimization in Smart Homes" style="width: 100%; border-radius: 5px;">
            </div>

            <h4>Security Enhancements with AI</h4>
            <p>Home security is another area where AI shines. Traditional security systems often rely on static measures such as alarm systems and surveillance cameras. However, AI can take home security to the next level by providing real-time threat detection, facial recognition, and anomaly detection.</br>
            </br>The AI-based security system can distinguish between routine movements (such as family members entering the house) and suspicious activity. For instance:
                <ul>
                    <li>Facial recognition software can be used to identify known individuals and provide access to the home while flagging unfamiliar faces.</li>
                    <li>The system can monitor security cameras in real-time, analyzing video footage for unusual behavior or potential threats.</li>
                    <li>AI-powered motion detectors can alert the homeowner to any unusual activity and even take preemptive measures, such as locking doors or alerting the authorities.</li>
                </ul>
            </p>

            <h4>Energy Efficiency and Sustainability</h4>
            <p>One of the biggest advantages of AI in smart homes is its potential to significantly reduce energy consumption. By automating household functions and monitoring energy usage, AI can optimize the use of appliances and reduce waste.</br>
            </br>For example:
                <ul>
                    <li>The AI system can turn off unnecessary lights in empty rooms.</li>
                    <li>Smart thermostats can regulate the temperature based on weather forecasts, user behavior, and occupancy patterns.</li>
                    <li>Energy-hungry devices can be scheduled to run during periods of lower electricity demand, reducing costs and easing the burden on the grid.</li>
                </ul>
            Energy management becomes more intelligent with AI, as the system constantly learns from user behavior and external factors like the weather or energy prices. By adjusting settings in real-time, the system helps reduce the home's carbon footprint, contributing to a more sustainable future.
            </p>

            <h4>Voice Assistants and Integration with AI</h4>
            <p>Many smart home systems integrate with popular voice assistants like Amazon Alexa, Google Assistant, or Apple’s Siri. By connecting AI with voice-activated devices, users can control their homes hands-free, whether they want to adjust the thermostat, play music, or check security footage.
            AI not only powers the backend of the smart home system but also improves the voice recognition capabilities of these assistants. Through natural language processing (NLP), AI can understand and respond to a wide range of voice commands, making the system more intuitive to use.

                <!-- Video Embed (centered) -->
                <div style="text-align: center; margin: 30px 0;">
                    <video width="60%" controls>
                        <source src="video-demo-link.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            With the increasing adoption of AI in consumer electronics, smart homes are becoming more connected and user-friendly. Users can simply speak to their AI assistant and have full control over their home environment without lifting a finger.</p>

            <!-- Interactive Links to External Resources -->
            <h4>Interactivity and External Resources</h4>
            <p>Smart homes are the future of living, combining comfort, efficiency, and security into one seamless experience. To learn more about the latest innovations in AI and smart homes, check out the following resources:
                <ul>
                    <li><a href="https://example.com/ai-smart-homes" target="_blank">AI and Smart Homes: The Future of Living</a></li>
                    <li><a href="https://example.com/iot-security" target="_blank">IoT and Security in Smart Homes</a></li>
                </ul>
            These articles offer further insights into how AI and IoT are shaping the future of home automation and security.
            </p>
            <p>Learn more about how <a href="https://example.com/ai-smart-home" target="_blank">AI is changing the way we live</a> and read this <a href="https://example.com/ai-energy-management" target="_blank">research paper on AI energy management in smart homes</a>.</p>

            <h4>Conclusion</h4>
            <p>AI-powered smart homes offer a glimpse into the future of residential living, where automation enhances comfort, security, and sustainability. As these technologies continue to develop, we can expect to see even more intelligent systems that can learn from us and adapt to our evolving needs.</p>

            <!-- Q&A Section -->
            <h3 style="text-align: center; margin-top: 50px;">Questions and Answers</h3>

            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <!-- Left Column -->
                <div style="width: 45%;">
                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is a smart home system?
                        </h5>
                        <div class="qa-content">
                            <p>A smart home system automates household activities using IoT devices and AI technologies to optimize comfort, energy usage, and security.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            How does AI learn user behavior?
                        </h5>
                        <div class="qa-content">
                            <p>AI systems analyze user data over time, identifying patterns and preferences to predict future behavior and optimize settings.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can smart homes save energy?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI systems can reduce energy consumption by adjusting settings based on user behavior, ensuring optimal energy use at all times.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What devices are used in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>Smart homes use IoT devices like sensors, cameras, thermostats, and smart lighting systems to automate various tasks.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Is it possible to integrate AI with voice assistants?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI can be integrated with voice assistants like Alexa or Google Home to enable hands-free control over smart home devices.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can AI improve home security?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI improves home security by offering real-time monitoring, anomaly detection, and facial recognition capabilities.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div style="width: 45%;">
                    <div class="qa-box">
                        <h5 class="qa-question">
                            How do smart homes reduce energy costs?
                        </h5>
                        <div class="qa-content">
                            <p>Smart homes reduce energy costs by optimizing appliance usage during off-peak hours and minimizing unnecessary energy use.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is the role of IoT in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>The Internet of Things (IoT) connects devices and sensors within the home to a central network, allowing for seamless automation and control.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What challenges exist with AI in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>Challenges include data privacy concerns, the complexity of setting up smart systems, and the need for continuous updates to AI algorithms.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can AI systems in smart homes be hacked?
                        </h5>
                        <div class="qa-content">
                            <p>While no system is entirely hack-proof, using strong encryption and regular security updates can help protect AI systems in smart homes from cyber threats.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What are some popular AI-powered smart home platforms?
                        </h5>
                        <div class="qa-content">
                            <p>Popular AI-powered smart home platforms include Google Nest, Amazon Echo, Apple HomeKit, and Samsung SmartThings.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is the future of AI in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>The future of AI in smart homes will involve greater automation, more sophisticated learning capabilities, and deeper integration with IoT devices and voice assistants.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'blockchain-article': `
           <h2>AI Project: Smart Home Automation</h2>

            <h4>Introduction</h4>
            <p>Artificial Intelligence (AI) is transforming our daily lives in ways we couldn’t have imagined a few decades ago. One of the most promising applications of AI is in the development of smart home systems. These systems leverage AI and Internet of Things (IoT) technologies to automate household activities, enhance comfort, and improve energy efficiency. In this project, we explore the integration of AI in smart home environments, showcasing how this technology can make our homes more intelligent and responsive to our needs.
            The goal of this project is to create a fully automated home system that can learn from user behavior, predict their preferences, and optimize various settings in the home. Whether it’s adjusting the lighting, controlling the temperature, or enhancing security, AI can take the user experience to a whole new level.</p>

            <!-- Image 1 (left-aligned) -->
            <div style="float: left; margin-right: 20px; width: 40%;">
                <img src="smart-home-automation.jpeg" alt="AI Smart Home" style="width: 100%; border-radius: 5px;">
            </div>

            <h4>Understanding AI in Smart Homes</h4>
            <p>AI plays a critical role in enabling smart home systems to function effectively. By using advanced algorithms and machine learning, the system can gather data from various sensors and IoT devices, such as smart thermostats, lights, and security cameras. This data is then processed in real-time to create personalized recommendations and automate routine tasks.
            The AI system continuously monitors user activity and makes adjustments to improve comfort. For instance, if the system detects that the user prefers a certain temperature in the evening, it will automatically adjust the thermostat before the user returns home. Similarly, the system can manage lighting based on the time of day and room occupancy.</p>

            <h4>Automation for Convenience and Efficiency</h4>
            <p>One of the key benefits of smart home systems is the level of automation they offer. Gone are the days of manually adjusting the thermostat or remembering to turn off the lights before leaving the house. With AI, these tasks are handled effortlessly.</br>
            </br>AI-driven smart home systems can automate numerous tasks, including:
                <ul>
                    <li>Adjusting thermostats based on daily weather patterns.</li>
                    <li>Automatically locking doors and activating the security system when the user leaves the house.</li>
                    <li>Scheduling appliance use during off-peak energy hours to save on utility bills.</li>
                    <li>Monitoring and controlling energy consumption to reduce the environmental impact.</li>
                </ul>
            With AI's ability to process data from multiple sources, the system learns the user’s preferences and adjusts various parameters accordingly. The more data the system collects, the more accurate and efficient it becomes at predicting user needs and optimizing home operations.
            </p>

            <!-- Image 2 (right-aligned) -->
            <div style="float: right; margin-left: 20px; width: 40%;">
                <img src="smart-home-automation.jpeg" alt="Energy Optimization in Smart Homes" style="width: 100%; border-radius: 5px;">
            </div>

            <h4>Security Enhancements with AI</h4>
            <p>Home security is another area where AI shines. Traditional security systems often rely on static measures such as alarm systems and surveillance cameras. However, AI can take home security to the next level by providing real-time threat detection, facial recognition, and anomaly detection.</br>
            </br>The AI-based security system can distinguish between routine movements (such as family members entering the house) and suspicious activity. For instance:
                <ul>
                    <li>Facial recognition software can be used to identify known individuals and provide access to the home while flagging unfamiliar faces.</li>
                    <li>The system can monitor security cameras in real-time, analyzing video footage for unusual behavior or potential threats.</li>
                    <li>AI-powered motion detectors can alert the homeowner to any unusual activity and even take preemptive measures, such as locking doors or alerting the authorities.</li>
                </ul>
            </p>

            <h4>Energy Efficiency and Sustainability</h4>
            <p>One of the biggest advantages of AI in smart homes is its potential to significantly reduce energy consumption. By automating household functions and monitoring energy usage, AI can optimize the use of appliances and reduce waste.</br>
            </br>For example:
                <ul>
                    <li>The AI system can turn off unnecessary lights in empty rooms.</li>
                    <li>Smart thermostats can regulate the temperature based on weather forecasts, user behavior, and occupancy patterns.</li>
                    <li>Energy-hungry devices can be scheduled to run during periods of lower electricity demand, reducing costs and easing the burden on the grid.</li>
                </ul>
            Energy management becomes more intelligent with AI, as the system constantly learns from user behavior and external factors like the weather or energy prices. By adjusting settings in real-time, the system helps reduce the home's carbon footprint, contributing to a more sustainable future.
            </p>

            <h4>Voice Assistants and Integration with AI</h4>
            <p>Many smart home systems integrate with popular voice assistants like Amazon Alexa, Google Assistant, or Apple’s Siri. By connecting AI with voice-activated devices, users can control their homes hands-free, whether they want to adjust the thermostat, play music, or check security footage.
            AI not only powers the backend of the smart home system but also improves the voice recognition capabilities of these assistants. Through natural language processing (NLP), AI can understand and respond to a wide range of voice commands, making the system more intuitive to use.

                <!-- Video Embed (centered) -->
                <div style="text-align: center; margin: 30px 0;">
                    <video width="60%" controls>
                        <source src="video-demo-link.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            With the increasing adoption of AI in consumer electronics, smart homes are becoming more connected and user-friendly. Users can simply speak to their AI assistant and have full control over their home environment without lifting a finger.</p>

            <!-- Interactive Links to External Resources -->
            <h4>Interactivity and External Resources</h4>
            <p>Smart homes are the future of living, combining comfort, efficiency, and security into one seamless experience. To learn more about the latest innovations in AI and smart homes, check out the following resources:
                <ul>
                    <li><a href="https://example.com/ai-smart-homes" target="_blank">AI and Smart Homes: The Future of Living</a></li>
                    <li><a href="https://example.com/iot-security" target="_blank">IoT and Security in Smart Homes</a></li>
                </ul>
            These articles offer further insights into how AI and IoT are shaping the future of home automation and security.
            </p>
            <p>Learn more about how <a href="https://example.com/ai-smart-home" target="_blank">AI is changing the way we live</a> and read this <a href="https://example.com/ai-energy-management" target="_blank">research paper on AI energy management in smart homes</a>.</p>

            <h4>Conclusion</h4>
            <p>AI-powered smart homes offer a glimpse into the future of residential living, where automation enhances comfort, security, and sustainability. As these technologies continue to develop, we can expect to see even more intelligent systems that can learn from us and adapt to our evolving needs.</p>

            <!-- Q&A Section -->
            <h3 style="text-align: center; margin-top: 50px;">Questions and Answers</h3>

            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <!-- Left Column -->
                <div style="width: 45%;">
                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is a smart home system?
                        </h5>
                        <div class="qa-content">
                            <p>A smart home system automates household activities using IoT devices and AI technologies to optimize comfort, energy usage, and security.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            How does AI learn user behavior?
                        </h5>
                        <div class="qa-content">
                            <p>AI systems analyze user data over time, identifying patterns and preferences to predict future behavior and optimize settings.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can smart homes save energy?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI systems can reduce energy consumption by adjusting settings based on user behavior, ensuring optimal energy use at all times.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What devices are used in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>Smart homes use IoT devices like sensors, cameras, thermostats, and smart lighting systems to automate various tasks.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Is it possible to integrate AI with voice assistants?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI can be integrated with voice assistants like Alexa or Google Home to enable hands-free control over smart home devices.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can AI improve home security?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI improves home security by offering real-time monitoring, anomaly detection, and facial recognition capabilities.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div style="width: 45%;">
                    <div class="qa-box">
                        <h5 class="qa-question">
                            How do smart homes reduce energy costs?
                        </h5>
                        <div class="qa-content">
                            <p>Smart homes reduce energy costs by optimizing appliance usage during off-peak hours and minimizing unnecessary energy use.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is the role of IoT in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>The Internet of Things (IoT) connects devices and sensors within the home to a central network, allowing for seamless automation and control.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What challenges exist with AI in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>Challenges include data privacy concerns, the complexity of setting up smart systems, and the need for continuous updates to AI algorithms.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can AI systems in smart homes be hacked?
                        </h5>
                        <div class="qa-content">
                            <p>While no system is entirely hack-proof, using strong encryption and regular security updates can help protect AI systems in smart homes from cyber threats.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What are some popular AI-powered smart home platforms?
                        </h5>
                        <div class="qa-content">
                            <p>Popular AI-powered smart home platforms include Google Nest, Amazon Echo, Apple HomeKit, and Samsung SmartThings.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is the future of AI in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>The future of AI in smart homes will involve greater automation, more sophisticated learning capabilities, and deeper integration with IoT devices and voice assistants.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'arvr-article': `
            <h2>AI Project: Smart Home Automation</h2>

            <h4>Introduction</h4>
            <p>Artificial Intelligence (AI) is transforming our daily lives in ways we couldn’t have imagined a few decades ago. One of the most promising applications of AI is in the development of smart home systems. These systems leverage AI and Internet of Things (IoT) technologies to automate household activities, enhance comfort, and improve energy efficiency. In this project, we explore the integration of AI in smart home environments, showcasing how this technology can make our homes more intelligent and responsive to our needs.
            The goal of this project is to create a fully automated home system that can learn from user behavior, predict their preferences, and optimize various settings in the home. Whether it’s adjusting the lighting, controlling the temperature, or enhancing security, AI can take the user experience to a whole new level.</p>

            <!-- Image 1 (left-aligned) -->
            <div style="float: left; margin-right: 20px; width: 40%;">
                <img src="smart-home-automation.jpeg" alt="AI Smart Home" style="width: 100%; border-radius: 5px;">
            </div>

            <h4>Understanding AI in Smart Homes</h4>
            <p>AI plays a critical role in enabling smart home systems to function effectively. By using advanced algorithms and machine learning, the system can gather data from various sensors and IoT devices, such as smart thermostats, lights, and security cameras. This data is then processed in real-time to create personalized recommendations and automate routine tasks.
            The AI system continuously monitors user activity and makes adjustments to improve comfort. For instance, if the system detects that the user prefers a certain temperature in the evening, it will automatically adjust the thermostat before the user returns home. Similarly, the system can manage lighting based on the time of day and room occupancy.</p>

            <h4>Automation for Convenience and Efficiency</h4>
            <p>One of the key benefits of smart home systems is the level of automation they offer. Gone are the days of manually adjusting the thermostat or remembering to turn off the lights before leaving the house. With AI, these tasks are handled effortlessly.</br>
            </br>AI-driven smart home systems can automate numerous tasks, including:
                <ul>
                    <li>Adjusting thermostats based on daily weather patterns.</li>
                    <li>Automatically locking doors and activating the security system when the user leaves the house.</li>
                    <li>Scheduling appliance use during off-peak energy hours to save on utility bills.</li>
                    <li>Monitoring and controlling energy consumption to reduce the environmental impact.</li>
                </ul>
            With AI's ability to process data from multiple sources, the system learns the user’s preferences and adjusts various parameters accordingly. The more data the system collects, the more accurate and efficient it becomes at predicting user needs and optimizing home operations.
            </p>

            <!-- Image 2 (right-aligned) -->
            <div style="float: right; margin-left: 20px; width: 40%;">
                <img src="smart-home-automation.jpeg" alt="Energy Optimization in Smart Homes" style="width: 100%; border-radius: 5px;">
            </div>

            <h4>Security Enhancements with AI</h4>
            <p>Home security is another area where AI shines. Traditional security systems often rely on static measures such as alarm systems and surveillance cameras. However, AI can take home security to the next level by providing real-time threat detection, facial recognition, and anomaly detection.</br>
            </br>The AI-based security system can distinguish between routine movements (such as family members entering the house) and suspicious activity. For instance:
                <ul>
                    <li>Facial recognition software can be used to identify known individuals and provide access to the home while flagging unfamiliar faces.</li>
                    <li>The system can monitor security cameras in real-time, analyzing video footage for unusual behavior or potential threats.</li>
                    <li>AI-powered motion detectors can alert the homeowner to any unusual activity and even take preemptive measures, such as locking doors or alerting the authorities.</li>
                </ul>
            </p>

            <h4>Energy Efficiency and Sustainability</h4>
            <p>One of the biggest advantages of AI in smart homes is its potential to significantly reduce energy consumption. By automating household functions and monitoring energy usage, AI can optimize the use of appliances and reduce waste.</br>
            </br>For example:
                <ul>
                    <li>The AI system can turn off unnecessary lights in empty rooms.</li>
                    <li>Smart thermostats can regulate the temperature based on weather forecasts, user behavior, and occupancy patterns.</li>
                    <li>Energy-hungry devices can be scheduled to run during periods of lower electricity demand, reducing costs and easing the burden on the grid.</li>
                </ul>
            Energy management becomes more intelligent with AI, as the system constantly learns from user behavior and external factors like the weather or energy prices. By adjusting settings in real-time, the system helps reduce the home's carbon footprint, contributing to a more sustainable future.
            </p>

            <h4>Voice Assistants and Integration with AI</h4>
            <p>Many smart home systems integrate with popular voice assistants like Amazon Alexa, Google Assistant, or Apple’s Siri. By connecting AI with voice-activated devices, users can control their homes hands-free, whether they want to adjust the thermostat, play music, or check security footage.
            AI not only powers the backend of the smart home system but also improves the voice recognition capabilities of these assistants. Through natural language processing (NLP), AI can understand and respond to a wide range of voice commands, making the system more intuitive to use.

                <!-- Video Embed (centered) -->
                <div style="text-align: center; margin: 30px 0;">
                    <video width="60%" controls>
                        <source src="video-demo-link.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            With the increasing adoption of AI in consumer electronics, smart homes are becoming more connected and user-friendly. Users can simply speak to their AI assistant and have full control over their home environment without lifting a finger.</p>

            <!-- Interactive Links to External Resources -->
            <h4>Interactivity and External Resources</h4>
            <p>Smart homes are the future of living, combining comfort, efficiency, and security into one seamless experience. To learn more about the latest innovations in AI and smart homes, check out the following resources:
                <ul>
                    <li><a href="https://example.com/ai-smart-homes" target="_blank">AI and Smart Homes: The Future of Living</a></li>
                    <li><a href="https://example.com/iot-security" target="_blank">IoT and Security in Smart Homes</a></li>
                </ul>
            These articles offer further insights into how AI and IoT are shaping the future of home automation and security.
            </p>
            <p>Learn more about how <a href="https://example.com/ai-smart-home" target="_blank">AI is changing the way we live</a> and read this <a href="https://example.com/ai-energy-management" target="_blank">research paper on AI energy management in smart homes</a>.</p>

            <h4>Conclusion</h4>
            <p>AI-powered smart homes offer a glimpse into the future of residential living, where automation enhances comfort, security, and sustainability. As these technologies continue to develop, we can expect to see even more intelligent systems that can learn from us and adapt to our evolving needs.</p>

            <!-- Q&A Section -->
            <h3 style="text-align: center; margin-top: 50px;">Questions and Answers</h3>

            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <!-- Left Column -->
                <div style="width: 45%;">
                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is a smart home system?
                        </h5>
                        <div class="qa-content">
                            <p>A smart home system automates household activities using IoT devices and AI technologies to optimize comfort, energy usage, and security.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            How does AI learn user behavior?
                        </h5>
                        <div class="qa-content">
                            <p>AI systems analyze user data over time, identifying patterns and preferences to predict future behavior and optimize settings.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can smart homes save energy?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI systems can reduce energy consumption by adjusting settings based on user behavior, ensuring optimal energy use at all times.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What devices are used in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>Smart homes use IoT devices like sensors, cameras, thermostats, and smart lighting systems to automate various tasks.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Is it possible to integrate AI with voice assistants?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI can be integrated with voice assistants like Alexa or Google Home to enable hands-free control over smart home devices.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can AI improve home security?
                        </h5>
                        <div class="qa-content">
                            <p>Yes, AI improves home security by offering real-time monitoring, anomaly detection, and facial recognition capabilities.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div style="width: 45%;">
                    <div class="qa-box">
                        <h5 class="qa-question">
                            How do smart homes reduce energy costs?
                        </h5>
                        <div class="qa-content">
                            <p>Smart homes reduce energy costs by optimizing appliance usage during off-peak hours and minimizing unnecessary energy use.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is the role of IoT in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>The Internet of Things (IoT) connects devices and sensors within the home to a central network, allowing for seamless automation and control.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What challenges exist with AI in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>Challenges include data privacy concerns, the complexity of setting up smart systems, and the need for continuous updates to AI algorithms.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            Can AI systems in smart homes be hacked?
                        </h5>
                        <div class="qa-content">
                            <p>While no system is entirely hack-proof, using strong encryption and regular security updates can help protect AI systems in smart homes from cyber threats.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What are some popular AI-powered smart home platforms?
                        </h5>
                        <div class="qa-content">
                            <p>Popular AI-powered smart home platforms include Google Nest, Amazon Echo, Apple HomeKit, and Samsung SmartThings.</p>
                        </div>
                    </div>

                    <div class="qa-box">
                        <h5 class="qa-question">
                            What is the future of AI in smart homes?
                        </h5>
                        <div class="qa-content">
                            <p>The future of AI in smart homes will involve greater automation, more sophisticated learning capabilities, and deeper integration with IoT devices and voice assistants.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // Open modal and display the corresponding article
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const articleKey = this.getAttribute('data-article');
            modalContent.innerHTML = articles[articleKey];
            modal.style.display = 'block';
        });
    });

    // Close the modal when the user clicks on the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        if (isMaximized) toggleMaximize();
    });

    // Maximize and minimize modal
    maximizeBtn.addEventListener('click', function() {
        toggleMaximize();
    });

    function toggleMaximize() {
        if (!isMaximized) {
            modal.querySelector('.modal-content').classList.add('modal-fullscreen');
            isMaximized = true;
        } else {
            modal.querySelector('.modal-content').classList.remove('modal-fullscreen');
            isMaximized = false;
        }
    }

    // Close the modal when the user clicks anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            if (isMaximized) toggleMaximize();
        }
    });
});

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Event delegation: Listen for clicks on Q&A questions dynamically
    document.addEventListener('click', function (event) {
        
        // Check if the clicked element has the class 'qa-question'
        if (event.target.classList.contains('qa-question')) {
            const question = event.target;              // The clicked question
            const content = question.nextElementSibling; // The answer content (next element)

            if (content) {
                // Toggle visibility of answer (add/remove class)
                content.classList.toggle('expand-visible');
                
                // Toggle the 'expanded' class to rotate the arrow
                question.classList.toggle('expanded');

                // Smooth expand/collapse animation for content
                if (content.style.display === 'block') {
                    content.style.height = content.scrollHeight + 'px'; // Get full height
                    setTimeout(() => {
                        content.style.height = '0'; // Collapse to 0 height
                        content.style.display = 'none';
                    }, 10);
                } else {
                    content.style.display = 'block'; // Expand content
                    const height = content.scrollHeight + 'px'; // Get full height
                    content.style.height = '0'; // Start from 0 height
                    setTimeout(() => {
                        content.style.height = height; // Expand to full height
                    }, 10);
                }
            }
        }
    });
});


// Parallax effect on Home Section Background
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.3;
    document.querySelector('.home-section').style.backgroundPositionY = `${scrollPosition * parallaxSpeed}px`;
});


// Function to highlight the navbar link for the current section
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove the 'active' class from all links
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active'); // Add the 'active' class to the current link
        }
    });
});


// Function to type text character by character
function typeText(element, text, speed, callback) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            if (callback) callback(); // Trigger next typing effect after completion
        }
    }, speed);
}
// Function to initiate the typing sequence
function startTypewriterEffect() {
    // Type the name first
    const nameElement = document.getElementById("typewriter-name");
    const nameText = nameElement.textContent;
    nameElement.textContent = ""; // Clear initial text for typing effect

    // Type the intro paragraph after the name
    const introElement = document.getElementById("typewriter-intro");
    const introText = introElement.textContent;
    introElement.textContent = ""; // Clear initial text for typing effect

    typeText(nameElement, nameText, 100, () => {
        setTimeout(() => {
            typeText(introElement, introText, 50);
        }, 500); // Delay before typing the intro
    });
}
// Start typing effect when page loads
window.onload = startTypewriterEffect;


// JavaScript for Horizontal Scrolling of Skills Section
const skillIcons = document.querySelector('.skill-icons');

// Mouse wheel scroll (desktop)
skillIcons.addEventListener('wheel', (event) => {
    event.preventDefault();
    skillIcons.scrollLeft += event.deltaY;  // Horizontal scroll
});

// Touch scroll (mobile)
let startX;

skillIcons.addEventListener('touchstart', (event) => {
    startX = event.touches[0].pageX;
});

skillIcons.addEventListener('touchmove', (event) => {
    const touchX = event.touches[0].pageX;
    const scrollAmount = startX - touchX;
    skillIcons.scrollLeft += scrollAmount;
    startX = touchX;
});


// Story Animation - Trigger on Scroll
const storySection = document.querySelector('.story-section');
const storyText = document.querySelector('.story-text');

// Function to check if the story section is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', function() {
    if (isInViewport(storySection)) {
        storyText.classList.add('story-visible');
    }
});


let previousScrollY = 0;
/// Popup Functionality
function openPopup(popupId) {
    const popup = document.getElementById('popup-window');
    const popupContent = document.getElementById('popup-content');

    // Save the current scroll position
    previousScrollY = window.scrollY;
    
    // Set content based on popupId
    let content = '';
    if (popupId === 'education-popup') {
        content = `
            <img src="uc-berkeley.jpg" alt="University Image" style="width:100%; margin-top:20px;">
            <h3>University of California, Berkeley</h3>
            <p>Details about University of California, Berkeley.</p>
            <p>Anticipated Graduation: Dec 2024</p>
            <p>CGPA: 3.40/4.00</p>
        `;
    } else if (popupId === 'experience-popup') {
        content = `
            <img src="data-analytics.jpg" alt="Experience Image" style="width:100%; margin-top:20px;">
            <h3>Data Analyst Intern at Tech Innovators</h3>
            <p>Details about the Data Analyst position.</p>
            <p>Duration: June 2024 - July 2024</p>
        `;
    } else if (popupId === 'internships-popup') {
        content = `
            <img src="data-analytics.jpg" alt="Experience Image" style="width:100%; margin-top:20px;">
            <h3>Data Analyst Intern at Tech Innovators</h3>
            <p>Details about the Data Analyst position.</p>
            <p>Duration: June 2024 - July 2024</p>
        `;
    } else if (popupId === 'presentations-popup') {
        content = `
            <img src="data-analytics.jpg" alt="Experience Image" style="width:100%; margin-top:20px;">
            <h3>Data Analyst Intern at Tech Innovators</h3>
            <p>Details about the Data Analyst position.</p>
            <p>Duration: June 2024 - July 2024</p>
        `;
    } else if (popupId === 'project1-popup') {
        content = `
            <h3>Smart Home Automation System</h3>
            <img src="smart-home-automation.jpeg" alt="Project Image" style="width:100%; margin-top:20px;">
            <p>
                <ul>
                    <li>Developed a web-based home automation platform using Raspberry Pi and Arduino</li>
                    <li>Implemented machine learning algorithms for predictive energy management</li>
                </ul>
            </p>
            <!-- Video Embed (centered) -->
            <div style="text-align: center; margin: 30px 0;">
                <video width="100%" controls>
                    <source src="video-demo-link.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    } else if (popupId === 'project2-popup') {
        content = `
            <h3>Blockchain Decentralized Finance</h3>
            <img src="blockchain-image1.webp" alt="Blockchain Image" style="width:100%; margin-top:20px;">
            <p>Built a decentralized finance system using blockchain technology...</p>
            <!-- Video Embed (centered) -->
            <div style="text-align: center; margin: 30px 0;">
                <video width="100%" controls>
                    <source src="video-demo-link.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    }

    popupContent.innerHTML = content;
    popup.style.display = 'block';

    // Prevent scrolling to the top when the popup opens
    document.body.style.position = 'fixed';
    document.body.style.top = `-${previousScrollY}px`; // Keep it at the same scroll position
}

// Close Popup and restore scrolling behavior
function closePopup() {
    document.getElementById('popup-window').style.display = 'none';
    
    // Restore the original scroll position
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, previousScrollY);
}

// Scroll-triggered animations for CV section
const cvSectionItems = document.querySelectorAll('.cv-section-item');
window.addEventListener('scroll', () => {
    cvSectionItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.classList.add('visible');
        }
    });
});


// Chatbot Query Handling
function sendMessage() {
    const input = document.getElementById("user-input").value;
    const chatLog = document.getElementById("chat-log");

    if (input.trim()) {
        // Display the user's message in the chat log
        chatLog.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

        // Send user query to the Python backend
        fetch('http://localhost:5500/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: input })
        })
        .then(response => response.json())
        .then(data => {
            if (data.answer) {
                // Animate the chatbot response with a fade-in effect
                chatLog.innerHTML += `<p class="chatbot-response"><strong>Chatbot:</strong> ${data.answer}</p>`;
                chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
            } else {
                chatLog.innerHTML += `<p class="chatbot-response"><strong>Chatbot:</strong> I don't know the answer. Please leave feedback here.</p>`;
                chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
            }
        })
        .catch(error => {
            chatLog.innerHTML += `<p><strong>Chatbot:</strong> Sorry, there was an error with the chatbot.</p>`;
            chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
        });

        // Clear the input field after sending the message
        document.getElementById("user-input").value = '';
    }
}

// Handle Enter Key Press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent the form from being submitted
        sendMessage();  // Call the sendMessage function
    }
});

// Ideas Board: Add Ideas Dynamically
function addIdea() {
    const idea = document.getElementById('idea-input').value;

    if (idea) {
        const ideaEntry = document.createElement('div');
        ideaEntry.className = 'idea-entry';
        ideaEntry.innerHTML = `<p>${idea}</p>`;
        
        document.getElementById('ideas-list').appendChild(ideaEntry);
        document.getElementById('idea-input').value = '';  // Clear input
    } else {
        alert('Please enter an idea.');
    }
}

// View Site Button
function viewSite() {
    window.location.href = 'index.html';  // Redirect to the public view of the site
}
