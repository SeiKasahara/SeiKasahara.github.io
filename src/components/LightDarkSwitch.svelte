<script lang="ts">
import { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants.ts";
import Icon from "@iconify/svelte";
import {
	applyThemeToDocument,
	getStoredTheme,
	setTheme,
} from "@utils/setting-utils.ts";
import { onMount } from "svelte";
import type { LIGHT_DARK_MODE } from "@/types/config.ts";

const seq: LIGHT_DARK_MODE[] = [LIGHT_MODE, DARK_MODE, AUTO_MODE];
let mode: LIGHT_DARK_MODE = $state(AUTO_MODE);

// 存储媒体查询监听器，避免重复创建
let darkModePreference: MediaQueryList;
let changeThemeWhenSchemeChanged: (e: MediaQueryListEvent) => void;

onMount(() => {
	mode = getStoredTheme();
	
	// 监听系统主题变化（当处于AUTO_MODE时）
	darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
	changeThemeWhenSchemeChanged = (e) => {
		// 只有在自动模式下才响应系统主题变化
		if (mode === AUTO_MODE) {
			applyThemeToDocument(AUTO_MODE);
		}
	};
	darkModePreference.addEventListener("change", changeThemeWhenSchemeChanged);
	
	// 清理函数
	return () => {
		darkModePreference.removeEventListener("change", changeThemeWhenSchemeChanged);
	};
});

function switchScheme(newMode: LIGHT_DARK_MODE) {
	mode = newMode;
	setTheme(newMode);
	
	// 如果切换到自动模式，立即应用系统主题
	if (newMode === AUTO_MODE) {
		applyThemeToDocument(AUTO_MODE);
	}
}

function toggleScheme() {
	let i = 0;
	for (; i < seq.length; i++) {
		if (seq[i] === mode) {
			break;
		}
	}
	switchScheme(seq[(i + 1) % seq.length]);
}

// 使用防抖函数优化面板显示/隐藏
let panelTimeout: number | null = null;

function showPanel() {
	if (panelTimeout) {
		clearTimeout(panelTimeout);
		panelTimeout = null;
	}
	
	const panel = document.querySelector("#light-dark-panel") as HTMLElement | null;
	if (panel) {
		panel.classList.remove("float-panel-closed");
	}
}

function hidePanel() {
	// 添加防抖延迟，避免鼠标快速移动时的闪烁
	if (panelTimeout) {
		clearTimeout(panelTimeout);
	}
	
	panelTimeout = window.setTimeout(() => {
		const panel = document.querySelector("#light-dark-panel") as HTMLElement | null;
		if (panel) {
			panel.classList.add("float-panel-closed");
		}
		panelTimeout = null;
	}, 150);
}
</script>

<!-- z-50 make the panel higher than other float panels -->
<div class="relative z-50" role="menu" tabindex="-1" onmouseleave={hidePanel}>
    <button aria-label="Light/Dark Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="scheme-switch" onclick={toggleScheme} onmouseenter={showPanel}>
        <div class="absolute" class:opacity-0={mode !== LIGHT_MODE}>
            <Icon icon="material-symbols:wb-sunny-outline-rounded" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== DARK_MODE}>
            <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== AUTO_MODE}>
            <Icon icon="material-symbols:radio-button-partial-outline" class="text-[1.25rem]"></Icon>
        </div>
    </button>

    <div id="light-dark-panel" class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5" >
        <div class="card-base float-panel p-2">
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={mode === LIGHT_MODE}
                    onclick={() => switchScheme(LIGHT_MODE)}
            >
                <Icon icon="material-symbols:wb-sunny-outline-rounded" class="text-[1.25rem] mr-3"></Icon>
                你相信光吗
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={mode === DARK_MODE}
                    onclick={() => switchScheme(DARK_MODE)}
            >
                <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.25rem] mr-3"></Icon>
                拥抱黑暗吧
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"
                    class:current-theme-btn={mode === AUTO_MODE}
                    onclick={() => switchScheme(AUTO_MODE)}
            >
                <Icon icon="material-symbols:radio-button-partial-outline" class="text-[1.25rem] mr-3"></Icon>
                跟着系统变
            </button>
        </div>
    </div>
</div>