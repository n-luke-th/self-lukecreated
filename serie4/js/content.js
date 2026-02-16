// @ts-nocheck
function renderContent(data) {
  //   const projectsContainer = document.getElementById("projectsContainer");
  //   projectsContainer.innerHTML = "";
  //   data.projects.forEach((project) => {
  //     projectsContainer.innerHTML += `
  //       <div>
  //         <h3 class="font-semibold">${project.name}</h3>
  //         <p class="text-sm text-neutral-500">${project.description}</p>
  //         <a href="${project.link}" target="_blank" class="text-sm underline">GitHub →</a>
  //       </div>
  //     `;
  //   });

  const contactContainer = document.getElementById("socialAndContactContainer");
  contactContainer.innerHTML = "";
  data.socialAndContact.forEach((item) => {
    contactContainer.innerHTML += `
      <div>
        <a class="font-semibold mb-1 underline underline-offset-1" href="${item.link}" target="_blank">${item.label}</a>
      </div>
    `;
  });

  const skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = "";
  data.skills.forEach((group) => {
    skillsContainer.innerHTML += `
      <div>
        <h3 class="font-semibold mb-2">${group.category}</h3>
        <p class="text-sm text-neutral-500">${group.items.join(", ")}</p>
      </div>
    `;
  });

  const experienceContainer = document.getElementById("experienceContainer");
  experienceContainer.innerHTML = "";
  data.experience.forEach((job) => {
    experienceContainer.innerHTML += `
      <div>
        <h3 class="font-semibold">${job.role} - ${job.company}</h3>
        <ul class="list-disc ml-5 mt-2 text-sm text-neutral-500">
          ${job.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    `;
  });
}
