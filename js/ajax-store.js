const getTools = () => {
    const url = "../data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options).then((response) => response.json());
};

const getImageUrl = (toolTitle) => {
    // Assuming SVG images are in the "images" folder and named by tool title
    return `./img/${toolTitle.toLowerCase().replace(/\s+/g, '-')}-71D358.svg`;
};

const createToolElement = (tool) => {
    const toolElement = document.createElement("tr");
    toolElement.innerHTML = `
        <td scope="row">
            <div class="d-flex align-items-center">
                 <img src="${getImageUrl(tool.title)}" alt="${tool.title}" class="tool-icon">
                ${tool.title}
            </div>
        </td>
        <td>
            <div class="d-flex align-items-center">
                ${tool.quantity}
            </div>
        </td>
        <td>
            <div class="d-flex align-items-center">
                ${tool.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })}
            </div>
        </td>
        <td>
            <div class="d-flex align-items-center flex-wrap gap-1">
                ${tool.categories
        .map((category) => {
            return `<span class="badge rounded-pill text-bg-secondary">${category}</span>`;
        })
        .join("")}
            </div>
        </td>
        <td colspan="1">
            <div class="d-flex align-items-center">
                <button class="btn btn-danger">Delete</button>
            </div>
        </td>
    `;
    const deleteBtn = toolElement.querySelector("button");
    deleteBtn.addEventListener("click", () => {
        toolElement.remove();
    });
    return toolElement;
};

const updateToolsElements = (tools) => {
    const tableBody = document.querySelector("#tools");
    tableBody.innerHTML = "";
    const toolsFragment = document.createDocumentFragment();
    tools.forEach((tool) => {
        const toolElement = createToolElement(tool);
        toolsFragment.appendChild(toolElement);
    });
    tableBody.appendChild(toolsFragment);
};

//MAIN

(async () => {
    const tools = await getTools();
    updateToolsElements(tools);
})();


