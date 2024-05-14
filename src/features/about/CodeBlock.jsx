import { Code } from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";

function CodeBlockDemo() {
  return (
    <Snippet className=" w-md ml-[10rem]" hideSymbol="true">
      <pre className="ml-2 whitespace-pre-wrap">
        <br />
        <span>class Me</span>
        <br />
        <span>&nbsp;&nbsp;def__init__(self):</span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;self.name=&quot;Zhenni Lin&quot;</span>
        <br />
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;self.hometown=&quot;Wenzhou, Zhejiang,
          CN&quot;
        </span>
        <br />
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;self.curr_location=&quot;Stockholm, SE&quot;
        </span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;# ⬆️ still learning</span>
        <br />
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;self.undergrad_school=&quot;MUST, MACAO&quot;
        </span>
        <br />
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;self.description=&quot;I am adaptable and
          enjoy engaging with challenging tasks. I learn quickly and am
          currently looking for an internship opportunity in software
          development.&quot;
        </span>
        <br />
        <br />
      </pre>
    </Snippet>
  );
}

export default CodeBlockDemo;
