import { TOOLS } from "../../constants";

export default function ToolsCard() {
  return (
    <div
      className="rounded-2xl p-4 overflow-hidden"
      style={{ background: "rgba(78, 198, 213, 1)", gridArea: "tools" }}
    >
      <h2 className="text-2xl font-black text-gray-900 mb-2">Tools</h2>
      <div className="grid grid-cols-4 gap-1">
        {TOOLS.map((tool) => (
          <div
            key={tool.name}
            title={tool.name}
            className="h-10 rounded-2xl flex items-center justify-center font-bold text-base"
            style={{ background: tool.bg, color: tool.text }}
          >
            {tool.abbr}
          </div>
        ))}
      </div>
    </div>
  );
}
