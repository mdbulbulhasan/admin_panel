<script setup>
import { omit } from '@unovis/ts';
import { VisTooltip } from '@unovis/vue';
import { createApp, h } from 'vue';
import { ChartTooltip } from '.';

// Define props with Vue's defineProps
const props = defineProps({
  selector: { type: String, required: true },
  index: { type: String, required: true },
  items: { type: Array, required: false },
  valueFormatter: { type: Function, required: false, default: (tick) => `${tick}` }, // Removed TypeScript annotation
  customTooltip: { type: Object, required: false }
});

// Use WeakMap to store reference to each data point for Tooltip
const wm = new WeakMap();

function template(d, i, elements) {
  let componentDiv;

  if (props.index in d) {
    if (wm.has(d)) {
      return wm.get(d);
    } else {
      componentDiv = document.createElement('div');
      const omittedData = Object.entries(omit(d, [props.index])).map(([key, value]) => {
        const legendReference = props.items?.find((i) => i.name === key);
        return { ...legendReference, value: props.valueFormatter(value) };
      });
      const TooltipComponent = props.customTooltip ?? ChartTooltip;

      // Create and mount the tooltip component
      const app = createApp(TooltipComponent, { title: d[props.index], data: omittedData });
      app.mount(componentDiv);
      wm.set(d, componentDiv.innerHTML);
      return componentDiv.innerHTML;
    }
  } else {
    const data = d.data;

    if (wm.has(data)) {
      return wm.get(data);
    } else {
      const style = getComputedStyle(elements[i]);
      const omittedData = [{ name: data.name, value: props.valueFormatter(data[props.index]), color: style.fill }];
      componentDiv = document.createElement('div');
      const TooltipComponent = props.customTooltip ?? ChartTooltip;

      // Create and mount the tooltip component
      const app = createApp(TooltipComponent, { title: d[props.index], data: omittedData });
      app.mount(componentDiv);
      wm.set(data, componentDiv.innerHTML);
      return componentDiv.innerHTML;
    }
  }
}
</script>

<template>
  <VisTooltip
      :horizontal-shift="20"
      :vertical-shift="20"
      :triggers="{
      [props.selector]: template,
    }"
  />
</template>

