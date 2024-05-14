function CodeBlockV1() {
  return (
    <div className="w-[2-rem] rounded-lg  bg-gray-100 p-6 text-[10px] opacity-70 shadow-lg sm:w-[40rem] sm:text-sm">
      <pre className="whitespace-pre-wrap text-left ">
        <code>
          <span className="text-purple-600">class</span>
          <span className="text-blue-600"> Me</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">def</span>
          <span className="text-blue-600">__init__</span>(
          <span className="text-yellow-600">self</span>)
          <span className="text-purple-600">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-600">self</span>.
          <span className="text-blue-600">name</span>
          <span className="text-purple-600">=</span>
          <span className="text-green-600">&quot;Zhenni Lin&quot;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-600">self</span>.
          <span className="text-blue-600">hometown</span>
          <span className="text-purple-600">=</span>
          <span className="text-green-600">
            &quot;Wenzhou, Zhejiang, CN&quot;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-600">self</span>.
          <span className="text-blue-600">curr_location</span>
          <span className="text-purple-600">=</span>
          <span className="text-green-600">&quot;Stockholm, SE&quot;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-600">self</span>.
          <span className="text-blue-600">grad_school</span>
          <span className="text-purple-600">=</span>
          <span className="text-green-600">&quot;SU, STOCKHOLM&quot;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-gray-600"># ⬆️ still learning</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-600">self</span>.
          <span className="text-blue-600">undergrad_school</span>
          <span className="text-purple-600">=</span>
          <span className="text-green-600">&quot;MUST, MACAO&quot;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-600">self</span>.
          <span className="text-blue-600">description</span>
          <span className="text-purple-600">=</span>
          <span className="text-green-600">
            &quot;Fast learner | Seeking opportunity&quot;
          </span>
          <br />
          {/* &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-green-600">
            challenging tasks. I learn quickly and am currently looking for an
            
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-green-600">
            internship opportunity in software development.&quot;
          </span>
          <br /> */}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlockV1;
